export function getStaticProps() {
  return {
    props: {
      number: Math.random()
    },
    revalidate: 10
  }
}

export default function ssg(props) {
  return (
    <div>
      {props.number}
    </div>
  )
}