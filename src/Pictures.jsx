import React, { useEffect, useState } from 'react'
import Picture from './components/Picture'
import axios from 'axios';

const Pictures = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get("http://localhost:5204/backend/image", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data);
      setImages(response.data)
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      setError(error);
    })
  }, []);
  return (
    <div className='ml-[28rem] w-fit h-screen '>
      <div className="flex flex-wrap">
      <Picture img="https://s3-alpha-sig.figma.com/img/8609/7ca4/02eb9da3d680372212466267cf8ad8d9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFQ0W1eM3-hwsWLXtXv9jyseh3xDsg3MEkMwf5bfxw1ABwyLgN00Fvei2C5b7JF2Uq0lwPXrbQmhlGICIhkaOwrW~G6eM8iR5v2v4C7Ug9vIpAOBrjKyQqcOmvdxPpsWqZp0H2DMIyRXJ59ujvxmfrce0Ik66Imykqe2TBV872uz4als7jN4mchn13eVhlugWPl17O4L513QSvERFPb~BaFBfpAZxdFb~QqZX8Cb69RtWB4gsxBwrqCEvjgPmxncVOZI3w7McEfQJwr3zytfpkp7nXUM1KVCRnzWLOl7kQoOJVXaONdfoLb57zEgR5wxQsrOuW9Bo~0iKYvS6PnA5A__" title="Butterfly" desc="Butterflies have taste receptors on their feet to help them find their host plants and locate food. A female butterfly lands on different plants, drumming the leaves with her feet until the plant releases its juices. " />
      <Picture img="https://s3-alpha-sig.figma.com/img/8609/7ca4/02eb9da3d680372212466267cf8ad8d9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFQ0W1eM3-hwsWLXtXv9jyseh3xDsg3MEkMwf5bfxw1ABwyLgN00Fvei2C5b7JF2Uq0lwPXrbQmhlGICIhkaOwrW~G6eM8iR5v2v4C7Ug9vIpAOBrjKyQqcOmvdxPpsWqZp0H2DMIyRXJ59ujvxmfrce0Ik66Imykqe2TBV872uz4als7jN4mchn13eVhlugWPl17O4L513QSvERFPb~BaFBfpAZxdFb~QqZX8Cb69RtWB4gsxBwrqCEvjgPmxncVOZI3w7McEfQJwr3zytfpkp7nXUM1KVCRnzWLOl7kQoOJVXaONdfoLb57zEgR5wxQsrOuW9Bo~0iKYvS6PnA5A__" title="Butterfly" desc="Butterflies have taste receptors on their feet to help them find their host plants and locate food. A female butterfly lands on different plants, drumming the leaves with her feet until the plant releases its juices. " />
      <Picture img="https://s3-alpha-sig.figma.com/img/8609/7ca4/02eb9da3d680372212466267cf8ad8d9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CFQ0W1eM3-hwsWLXtXv9jyseh3xDsg3MEkMwf5bfxw1ABwyLgN00Fvei2C5b7JF2Uq0lwPXrbQmhlGICIhkaOwrW~G6eM8iR5v2v4C7Ug9vIpAOBrjKyQqcOmvdxPpsWqZp0H2DMIyRXJ59ujvxmfrce0Ik66Imykqe2TBV872uz4als7jN4mchn13eVhlugWPl17O4L513QSvERFPb~BaFBfpAZxdFb~QqZX8Cb69RtWB4gsxBwrqCEvjgPmxncVOZI3w7McEfQJwr3zytfpkp7nXUM1KVCRnzWLOl7kQoOJVXaONdfoLb57zEgR5wxQsrOuW9Bo~0iKYvS6PnA5A__" title="Butterfly" desc="Butterflies have taste receptors on their feet to help them find their host plants and locate food. A female butterfly lands on different plants, drumming the leaves with her feet until the plant releases its juices. " />


        {/* {images.map(image => (
            <Picture key={image.id} img={image.imageURL} title={image.imageTitle} desc={image.imageDescription} />
        ))} */}
      </div>
    </div>
  )
}

export default Pictures
