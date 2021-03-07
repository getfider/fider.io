/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: React.FC<any>
  export default content
}
