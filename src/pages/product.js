import React, {useState} from 'react'
import Layout from '../layouts/index'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SampleImg from '../assets/Sample.png'
import { useSpring, animated } from 'react-spring'
import Products from "../content/products.json"

const ProductPage = () => {

  const [ frontActive, setFrontActive ] = useState(true);
  const [ backActive, setBackActive ] = useState(false);

  const [selectedPostcard, setSelectedPostcard] = useState({});

  function toggleClass() {
    setFrontActive(!frontActive);
    setBackActive(!backActive);
  };

  const AnimatedImg = animated(Img)

  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  // const [float, setFloat] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
  const { xys, config } = useSpring({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } })

  function selectPostcard(selected) {
    switch(selected) {
      case 'birthday':
        setSelectedPostcard({
          id: 'birthday',
          name: 'Birthday Postcard',
        });
        break;
      case 'inspiration':
        setSelectedPostcard({
          id: 'inspiration',
          name: 'Inspiration Postcard',
        });
        break;
      case 'just-because':
        setSelectedPostcard({
          id: 'just-because',
          name: 'Just Because Postcard',
        });
        break;
      case 'anniversary':
        setSelectedPostcard({
          id: 'anniversary',
          name: 'Anniversary Postcard',
        });
        break;
    }
  }

  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          siteName
        }
      }
      postcardImg: file(relativePath: { eq: "Sample.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardBack: file(relativePath: { eq: "Birthday-no-border.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postcardCartImg: file(relativePath: { eq: "Sample.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
      <Layout site={data.site.siteMetadata.siteName} headerClass="Header light">
      <div>
         <div className="product_container">
            {/* <Slider slides={[data.postcardImg, data.postcardBack]}>
            </Slider> */}

            <div className="left" onClick={() => set(state => !state)}>
              <AnimatedImg
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                className="c"
                style={{
                  opacity: opacity.interpolate(o => 1 - o),
                  transform
                }}
                fluid={data.postcardImg.childImageSharp.fluid} />
              <AnimatedImg
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                className="c"
                style={{
                  opacity,
                  transform: transform.interpolate(t => `${t} rotateY(-180deg)`)
                }}
                fluid={data.postcardBack.childImageSharp.fluid} />
            </div>

            {/* <div className={!frontActive ? 'card card-front--flip' : 'card card-front'} onClick={toggleClass} >
              <Img fluid={data.postcardImg.childImageSharp.fluid} />
            </div>
            <div className={backActive ? 'card card-back--flip' : 'card card-back'} onClick={toggleClass} >
              <Img fluid={data.postcardBack.childImageSharp.fluid} />
            </div> */}

            <div className="product_detail right">
              <h1>Postcard</h1>
              <p>$5.99</p>
              <p>Custom, handpicked postcard with handwritten message blah blah blah</p>
              {/* <select>
                <option>Birthday</option>
                <option>Inspiration</option>
                <option>Just Because</option>
              </select> */}
              <div className="options">
              {
                Products.map((product) => {
                  return <button className={`btn_picker ${selectedPostcard.id === product.id ? 'selected' : ''}`}
                                 onClick={() => selectPostcard(product.id)}>{product.name}
                         </button>
                })
              }
              </div>
              {/* <div className="options">
                <button className={`btn_picker ${selectedPostcard.id === 'birthday' ? 'selected' : ''}`} onClick={() => selectPostcard(0)}>Birthday</button>
                <button className={`btn_picker ${selectedPostcard.id === 'inspiration' ? 'selected' : ''}`} onClick={() => selectPostcard(1)}>Inspiration</button>
                <button className={`btn_picker ${selectedPostcard.id === 'just-because' ? 'selected' : ''}`} onClick={() => selectPostcard(2)}>Just Because</button>
                <button className={`btn_picker ${selectedPostcard.id === 'anniversary' ? 'selected' : ''}`} onClick={() => selectPostcard(3)}>Anniversary</button>
              </div> */}

              <button
                className="Product add snipcart-add-item"
                data-item-id='postcard'
                data-item-name={selectedPostcard.name}
                data-item-url="/product"
                data-item-price="5.99"
                data-item-image={SampleImg}
                data-item-max-quantity="100"
                data-item-categories={selectedPostcard.name}
              >
                ADD TO BAG
              </button>
            </div>
          </div>
      </div>

     </Layout>
    )
}

export default ProductPage
