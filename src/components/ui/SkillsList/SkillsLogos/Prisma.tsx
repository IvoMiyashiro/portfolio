import type { LogosProps } from './types.logos'

export const PrismaLogo = ({ isActive, inactiveColor, className, ...props }: LogosProps) => (
  <svg
    viewBox="0.34 -0.06 33.117 39.964"
    className={className}
    { ...props }
  >
    <path
      d="M32.908 30.475 19.151 1.26a2.208 2.208 0 0 0-1.88-1.257 2.183 2.183 0 0 0-2.01 1.042L.34 25.212a2.26 2.26 0 0 0 .025 2.426L7.66 38.935a2.346 2.346 0 0 0 2.635.969l21.17-6.262a2.32 2.32 0 0 0 1.457-1.258 2.27 2.27 0 0 0-.013-1.91zm-3.08 1.253L11.864 37.04c-.548.163-1.074-.312-.96-.865l6.418-30.731c.12-.575.914-.666 1.165-.134l11.881 25.23a.858.858 0 0 1-.541 1.188z"
      fill={`${isActive ? '#fff' : inactiveColor}`}
      className="transition-all"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
)

export default PrismaLogo
