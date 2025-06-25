import Carousel from '../RenderedComp/Carousel'

function Slider() {
  return (
    <div>
<div style={{ position: 'relative' }}>
  <Carousel
    baseWidth={300}
    autoplay={true}
    autoplayDelay={12000}
    pauseOnHover={true}
    loop={true}
    round={false}
  />
</div>
    </div>
  )
}

export default Slider
