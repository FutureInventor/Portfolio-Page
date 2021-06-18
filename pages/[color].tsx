import colors from './datacolors.json'

interface IColor {
  color: {
    name: string,
    hex: string
  }
}

interface IParams {
  params: {
    color: string
  }
}

export async function getStaticPaths() {
  const paths = colors.map(
    color => ({ params: { color: color.name }})
  )
  return { paths, fallback: false }
}

export async function getStaticProps(paramsObject: IParams) {
  const color = colors.find(color => color.name === paramsObject.params.color)
  return {props: {color}}
}

export default function Color(props: IColor) {
  return (
    <div className='color-page' style={{ backgroundColor: props.color.hex }}>
      <h1>{props.color.name}</h1>
    </div>
  )
}