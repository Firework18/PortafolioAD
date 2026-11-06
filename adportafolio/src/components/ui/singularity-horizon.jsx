import * as React from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const DEFAULT_SINGULARITY_STATES = [
  {
    title: "Stable Singularity",
    status: "Topology: Nominal",
    accent: "#00f3ff",
    velocity: "0.45c",
    morph: 0.1,
    compression: 1,
    intensity: 1,
    orbit: 1,
    spin: 0.08,
    camDistance: 85,
    camHeight: 25,
  },
  {
    title: "Accretion Turbulence",
    status: "Topology: Fluctuating",
    accent: "#ffaa00",
    velocity: "0.78c",
    morph: 4.5,
    compression: 1.15,
    intensity: 1.4,
    orbit: 1.8,
    spin: 0.3,
    camDistance: 95,
    camHeight: 45,
  },
  {
    title: "Relativistic Collapse",
    status: "Topology: Critical",
    accent: "#ff0044",
    velocity: "0.99c",
    morph: 0.8,
    compression: 0.38,
    intensity: 3.5,
    orbit: 4.5,
    spin: 0.9,
    camDistance: 55,
    camHeight: 12,
  },
]

const styles = [
  "@keyframes sg-hud-in { from { opacity: 0 } to { opacity: 1 } }",
  ".sg-hud-in { animation: sg-hud-in 1.2s ease both }",
  "@media (prefers-reduced-motion: reduce) { .sg-hud-in { animation: none } }",
].join("\n")

const HORIZON = 4
const CORE_QUAD = 5.6

const DISK_VERT = `#version 300 es
precision highp float;

in vec2 aCorner;
in vec3 aSeed;

uniform mat4 uProj;
uniform mat4 uView;
uniform vec3 uCam;
uniform float uTime;
uniform float uMorph;
uniform float uCompression;
uniform float uIntensity;
uniform float uOrbit;

out vec3 vColor;
out float vAlpha;
out vec2 vCorner;

float turbulence(vec2 p, float t) {
  return sin(p.x * 0.9 + t) * 0.5
       + sin(p.y * 1.1 - t * 0.8) * 0.3
       + sin((p.x + p.y) * 0.7 + t * 1.3) * 0.2;
}

void main() {
  float r0 = aSeed.x;
  float r = r0 * uCompression;
  float angle = aSeed.y + uTime * (1.5 / sqrt(r0)) * uOrbit;

  vec3 pos = vec3(cos(angle) * r, aSeed.z, sin(angle) * r);
  pos.y += turbulence(pos.xz * 0.08, uTime * 0.3) * uMorph * 4.0;

  vec3 viewDir = normalize(uCam - pos);
  vec3 tangent = vec3(-sin(angle), 0.0, cos(angle));

  float doppler = dot(tangent, viewDir);

  vec3 hot = vec3(1.0, 0.95, 0.9);
  vec3 warm = vec3(1.0, 0.45, 0.1);
  vec3 cool = vec3(0.1, 0.35, 1.0);
  vec3 color = mix(cool, warm, smoothstep(45.0, 12.0, r));
  color = mix(color, hot, smoothstep(10.0, 4.0, r));

  vColor = color * (1.3 + doppler * 0.7) * uIntensity;
  vAlpha = smoothstep(3.8, 5.5, r) * (1.0 - smoothstep(38.0, 48.0, r)) * 0.8;
  vCorner = aCorner;

  vec3 side = cross(tangent, viewDir);
  side = length(side) > 0.001 ? normalize(side) : vec3(0.0, 1.0, 0.0);
  vec3 offset = tangent * aCorner.x * 1.1 + side * aCorner.y * 0.13;

  gl_Position = uProj * uView * vec4(pos + offset, 1.0);
}
`

const DISK_FRAG = `#version 300 es
precision highp float;

in vec3 vColor;
in float vAlpha;
in vec2 vCorner;
out vec4 outColor;

void main() {
  float across = 1.0 - vCorner.y * vCorner.y;
  float along = 1.0 - vCorner.x * vCorner.x * 0.35;
  outColor = vec4(vColor, vAlpha * across * along);
}
`

const CORE_VERT = `#version 300 es
precision highp float;

in vec2 aCorner;

uniform mat4 uProj;
uniform mat4 uView;
uniform vec3 uRight;
uniform vec3 uUp;
uniform float uSize;

out vec2 vCorner;

void main() {
  vCorner = aCorner;
  vec3 pos = uRight * aCorner.x * uSize + uUp * aCorner.y * uSize;
  gl_Position = uProj * uView * vec4(pos, 1.0);
}
`

const CORE_FRAG = `#version 300 es
precision highp float;

in vec2 vCorner;

uniform mat4 uProj;
uniform mat4 uView;
uniform vec3 uRight;
uniform vec3 uUp;
uniform vec3 uForward;
uniform float uSize;
uniform float uHorizon;
uniform float uIntensity;
uniform bool uGlow;

out vec4 outColor;

void main() {
  float d = length(vCorner) * uSize;
  if (uGlow) {
    if (d < uHorizon) discard;
    float rim = pow(smoothstep(uSize, uHorizon, d), 3.0);
    gl_FragDepth = gl_FragCoord.z;
    outColor = vec4(vec3(1.0, 0.45, 0.1) * rim * uIntensity * 1.6, rim);
  } else {
    if (d > uHorizon) discard;
    float bulge = sqrt(max(uHorizon * uHorizon - d * d, 0.0));
    vec3 pos = uRight * vCorner.x * uSize + uUp * vCorner.y * uSize + uForward * bulge;
    vec4 clip = uProj * uView * vec4(pos, 1.0);
    gl_FragDepth = (clip.z / clip.w) * 0.5 + 0.5;
    outColor = vec4(0.0, 0.0, 0.0, 1.0);
  }
}
`

function compile(gl, vert, frag) {
  const program = gl.createProgram()
  if (!program) return null
  for (const [type, source] of [
    [gl.VERTEX_SHADER, vert],
    [gl.FRAGMENT_SHADER, frag],
  ]) {
    const shader = gl.createShader(type)
    if (!shader) return null
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("singularity-horizon:", gl.getShaderInfoLog(shader))
      return null
    }
    gl.attachShader(program, shader)
    gl.deleteShader(shader)
  }
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("singularity-horizon:", gl.getProgramInfoLog(program))
    return null
  }
  return program
}

function perspective(out, fovy, aspect, near, far) {
  const f = 1 / Math.tan(fovy / 2)
  out.fill(0)
  out[0] = f / aspect
  out[5] = f
  out[10] = (far + near) / (near - far)
  out[11] = -1
  out[14] = (2 * far * near) / (near - far)
}

function lookAtOrigin(out, eye, right, up, forward) {
  const len = Math.hypot(eye[0], eye[1], eye[2]) || 1
  const z = [eye[0] / len, eye[1] / len, eye[2] / len]
  const flat = Math.hypot(z[2], z[0])
  const x = flat > 1e-5 ? [z[2] / flat, 0, -z[0] / flat] : [1, 0, 0]
  const y = [
    z[1] * x[2] - z[2] * x[1],
    z[2] * x[0] - z[0] * x[2],
    z[0] * x[1] - z[1] * x[0],
  ]
  out.set([
    x[0], y[0], z[0], 0,
    x[1], y[1], z[1], 0,
    x[2], y[2], z[2], 0,
    -(x[0] * eye[0] + x[1] * eye[1] + x[2] * eye[2]),
    -(y[0] * eye[0] + y[1] * eye[1] + y[2] * eye[2]),
    -(z[0] * eye[0] + z[1] * eye[1] + z[2] * eye[2]),
    1,
  ])
  for (let i = 0; i < 3; i++) {
    right[i] = x[i]
    up[i] = y[i]
    forward[i] = z[i]
  }
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false)

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduced(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  return reduced
}

export default function SingularityHorizon({
  height = "100%",
  states = DEFAULT_SINGULARITY_STATES,
  interval = 10000,
  hud = false,
  mass = "4.2M SOL",
  lensing = "SCHWARZSCHILD",
  radiation = "DETECTION ON",
  particles = 4500,
  interactive = true,
  className = "",
}) {
  const canvasRef = React.useRef(null)
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = React.useState(0)
  const [, setGeneration] = React.useState(0)
  const [failed, setFailed] = React.useState(false)

  const cycle = states.length ? states : DEFAULT_SINGULARITY_STATES
  const current = cycle[index % cycle.length]

  const targetRef = React.useRef(current)
  React.useEffect(() => {
    targetRef.current = current
  }, [current])

  React.useEffect(() => {
    if (reduced || cycle.length < 2 || interval <= 0) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % cycle.length), interval)
    return () => window.clearInterval(id)
  }, [reduced, cycle.length, interval])

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2", {
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })
    if (!gl) {
      setFailed(true)
      return
    }

    const diskProgram = compile(gl, DISK_VERT, DISK_FRAG)
    const coreProgram = compile(gl, CORE_VERT, CORE_FRAG)
    if (!diskProgram || !coreProgram) {
      setFailed(true)
      return
    }

    const count = Math.max(1, Math.round(particles))
    const seeds = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.pow(Math.random(), 1.3) * 40
      seeds[i * 3] = r
      seeds[i * 3 + 1] = Math.random() * Math.PI * 2
      seeds[i * 3 + 2] = (Math.random() - 0.5) * (8 / r)
    }

    const corners = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
    const cornerBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, cornerBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, corners, gl.STATIC_DRAW)
    const seedBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, seedBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, seeds, gl.STATIC_DRAW)

    const diskVao = gl.createVertexArray()
    gl.bindVertexArray(diskVao)
    const diskCorner = gl.getAttribLocation(diskProgram, "aCorner")
    gl.bindBuffer(gl.ARRAY_BUFFER, cornerBuffer)
    gl.enableVertexAttribArray(diskCorner)
    gl.vertexAttribPointer(diskCorner, 2, gl.FLOAT, false, 0, 0)
    const diskSeed = gl.getAttribLocation(diskProgram, "aSeed")
    gl.bindBuffer(gl.ARRAY_BUFFER, seedBuffer)
    gl.enableVertexAttribArray(diskSeed)
    gl.vertexAttribPointer(diskSeed, 3, gl.FLOAT, false, 0, 0)
    gl.vertexAttribDivisor(diskSeed, 1)

    const coreVao = gl.createVertexArray()
    gl.bindVertexArray(coreVao)
    const coreCorner = gl.getAttribLocation(coreProgram, "aCorner")
    gl.bindBuffer(gl.ARRAY_BUFFER, cornerBuffer)
    gl.enableVertexAttribArray(coreCorner)
    gl.vertexAttribPointer(coreCorner, 2, gl.FLOAT, false, 0, 0)
    gl.bindVertexArray(null)

    const u = (program, name) => gl.getUniformLocation(program, name)
    const diskU = {
      proj: u(diskProgram, "uProj"),
      view: u(diskProgram, "uView"),
      cam: u(diskProgram, "uCam"),
      time: u(diskProgram, "uTime"),
      morph: u(diskProgram, "uMorph"),
      compression: u(diskProgram, "uCompression"),
      intensity: u(diskProgram, "uIntensity"),
      orbit: u(diskProgram, "uOrbit"),
    }
    const coreU = {
      proj: u(coreProgram, "uProj"),
      view: u(coreProgram, "uView"),
      right: u(coreProgram, "uRight"),
      up: u(coreProgram, "uUp"),
      forward: u(coreProgram, "uForward"),
      size: u(coreProgram, "uSize"),
      horizon: u(coreProgram, "uHorizon"),
      intensity: u(coreProgram, "uIntensity"),
      glow: u(coreProgram, "uGlow"),
    }

    const proj = new Float32Array(16)
    const view = new Float32Array(16)
    const right = [1, 0, 0]
    const up = [0, 1, 0]
    const forward = [0, 0, 1]

    const start = targetRef.current
    const eased = {
      morph: start.morph,
      compression: start.compression,
      intensity: start.intensity,
      orbit: start.orbit,
      spin: start.spin,
      distance: start.camDistance,
      height: start.camHeight,
    }
    let theta = Math.PI * 0.25
    let heightOffset = 0
    let simTime = reduced ? 9 : 0
    let last = 0
    let raf = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr))
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
    }

    const draw = (now) => {
      raf = 0
      const dt = last ? Math.min((now - last) / 1000, 0.05) : 0.016
      last = now
      resize()

      if (!reduced) {
        const k = 1 - Math.exp(-dt / 1.2)
        const t = targetRef.current
        eased.morph += (t.morph - eased.morph) * k
        eased.compression += (t.compression - eased.compression) * k
        eased.intensity += (t.intensity - eased.intensity) * k
        eased.orbit += (t.orbit - eased.orbit) * k
        eased.spin += (t.spin - eased.spin) * k
        eased.distance += (t.camDistance - eased.distance) * k
        eased.height += (t.camHeight - eased.height) * k
        simTime += dt
        theta += eased.spin * dt
      }

      const aspect = canvas.width / canvas.height
      const fit = aspect < 1 ? Math.min(1 / aspect, 1.6) : 1
      const distance = eased.distance * fit
      const camY = Math.max(
        -distance * 0.9,
        Math.min(distance * 0.9, eased.height * fit + heightOffset),
      )
      const radius = Math.sqrt(Math.max(distance * distance - camY * camY, 16))
      const eye = [Math.cos(theta) * radius, camY, Math.sin(theta) * radius]

      perspective(proj, (40 * Math.PI) / 180, aspect, 0.1, 1000)
      lookAtOrigin(view, eye, right, up, forward)

      gl.viewport(0, 0, canvas.width, canvas.height)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
      gl.enable(gl.DEPTH_TEST)

      gl.disable(gl.BLEND)
      gl.depthMask(true)
      gl.useProgram(coreProgram)
      gl.bindVertexArray(coreVao)
      gl.uniformMatrix4fv(coreU.proj, false, proj)
      gl.uniformMatrix4fv(coreU.view, false, view)
      gl.uniform3fv(coreU.right, right)
      gl.uniform3fv(coreU.up, up)
      gl.uniform3fv(coreU.forward, forward)
      gl.uniform1f(coreU.size, CORE_QUAD)
      gl.uniform1f(coreU.horizon, HORIZON)
      gl.uniform1f(coreU.intensity, eased.intensity)
      gl.uniform1i(coreU.glow, 0)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE)
      gl.depthMask(false)
      gl.useProgram(diskProgram)
      gl.bindVertexArray(diskVao)
      gl.uniformMatrix4fv(diskU.proj, false, proj)
      gl.uniformMatrix4fv(diskU.view, false, view)
      gl.uniform3fv(diskU.cam, eye)
      gl.uniform1f(diskU.time, simTime)
      gl.uniform1f(diskU.morph, eased.morph)
      gl.uniform1f(diskU.compression, eased.compression)
      gl.uniform1f(diskU.intensity, eased.intensity)
      gl.uniform1f(diskU.orbit, eased.orbit)
      gl.drawArraysInstanced(gl.TRIANGLE_STRIP, 0, 4, count)

      gl.disable(gl.DEPTH_TEST)
      gl.useProgram(coreProgram)
      gl.bindVertexArray(coreVao)
      gl.uniform1i(coreU.glow, 1)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      gl.bindVertexArray(null)

      if (!reduced) raf = requestAnimationFrame(draw)
    }

    const kick = () => {
      if (!raf) raf = requestAnimationFrame(draw)
    }
    kick()

    const observer = new ResizeObserver(kick)
    observer.observe(canvas)

    let dragging = false
    let lastX = 0
    let lastY = 0
    const onDown = (e) => {
      if (!interactive) return
      dragging = true
      lastX = e.clientX
      lastY = e.clientY
      canvas.setPointerCapture(e.pointerId)
    }
    const onMove = (e) => {
      if (!dragging) return
      theta -= (e.clientX - lastX) * 0.005
      heightOffset = Math.max(-30, Math.min(30, heightOffset + (e.clientY - lastY) * 0.15))
      lastX = e.clientX
      lastY = e.clientY
      kick()
    }
    const onUp = (e) => {
      dragging = false
      if (canvas.hasPointerCapture(e.pointerId)) canvas.releasePointerCapture(e.pointerId)
    }
    const onLost = (e) => {
      e.preventDefault()
      cancelAnimationFrame(raf)
      raf = 0
    }
    const onRestored = () => setGeneration((g) => g + 1)

    canvas.addEventListener("pointerdown", onDown)
    canvas.addEventListener("pointermove", onMove)
    canvas.addEventListener("pointerup", onUp)
    canvas.addEventListener("pointercancel", onUp)
    canvas.addEventListener("webglcontextlost", onLost)
    canvas.addEventListener("webglcontextrestored", onRestored)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      canvas.removeEventListener("pointerdown", onDown)
      canvas.removeEventListener("pointermove", onMove)
      canvas.removeEventListener("pointerup", onUp)
      canvas.removeEventListener("pointercancel", onUp)
      canvas.removeEventListener("webglcontextlost", onLost)
      canvas.removeEventListener("webglcontextrestored", onRestored)
      gl.deleteProgram(diskProgram)
      gl.deleteProgram(coreProgram)
      gl.deleteBuffer(cornerBuffer)
      gl.deleteBuffer(seedBuffer)
      gl.deleteVertexArray(diskVao)
      gl.deleteVertexArray(coreVao)
    }
  }, [particles, interactive, reduced])

  return (
    <div
      className={"relative w-full h-full overflow-hidden " + className}
      style={{ height }}
      aria-label={current.title}
    >
      <style>{styles}</style>

      {failed ? (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #000 12%, rgba(255,120,20,0.55) 13%, rgba(255,70,10,0.18) 22%, rgba(20,60,180,0.16) 45%, transparent 70%)",
          }}
        />
      ) : (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className={
            "absolute inset-0 block h-full w-full " +
            (interactive ? "cursor-grab touch-none active:cursor-grabbing" : "")
          }
        />
      )}

      {hud && (
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-10">
          <div key={index} className="sg-hud-in text-center">
            <div className="mb-3 text-[0.8rem] font-light uppercase tracking-[0.5em] opacity-90 sm:text-[1.2rem] sm:tracking-[0.8em]">
              {current.title}
            </div>
            <div
              className="inline-block rounded-full border px-5 py-1.5 text-[0.6rem] uppercase tracking-[0.25em]"
              style={{
                color: current.accent,
                borderColor: current.accent,
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {current.status}
            </div>
          </div>

          <div className="flex items-end justify-between gap-4 font-mono text-[0.6rem] uppercase tracking-wider opacity-60 sm:text-[0.7rem]">
            <div>
              <div className="mb-1.5">
                MASS_INDEX: <span style={{ color: current.accent }}>{mass}</span>
              </div>
              <div>
                LENSING: <span style={{ color: current.accent }}>{lensing}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="mb-1.5">
                RELATIVITY: <span style={{ color: current.accent }}>{current.velocity}</span>
              </div>
              <div>
                RADIATION: <span style={{ color: current.accent }}>{radiation}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
