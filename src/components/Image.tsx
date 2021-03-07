interface ImageProps {
  src: string
  className?: string
  alt: string
  width: number
  height: number
  browserFrame?: boolean
}

export function Image(props: ImageProps): JSX.Element {
  const src1x = `/_next/image?url=${encodeURIComponent(props.src)}&w=1920&q=75`
  const src2x = `/_next/image?url=${encodeURIComponent(props.src)}&w=3840&q=75`
  const img = <img width={props.width} height={props.height} className={props.className} alt={props.alt} src={src1x} srcSet={`${src2x} 2x`} />
  if (props.browserFrame) {
    return <div className="browser-frame">{img}</div>
  }

  return img
}
