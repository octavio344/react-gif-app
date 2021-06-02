import { useFetchGifs } from '../hooks/useFetchGifs';
import { GridGifItem } from './GridGifItem/GridGifItem';
import './GridGifItem/GridGifItem.css'
export const GridGif = ({category}) => {

    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs(category).then(
    //         //imgs => setImages(imgs)
    //         setImages
    //     );
    // },[ category ])

    // const getData = async() => {
    //     const url = `https://api.giphy.com/v1/gifs/search?api_key=T3EPuJUBmYs22aFAGdHgkHQy8SPuynU2&q=${ encodeURI(category) }&limit=10`
    //     const res = await fetch(url)
    //     const {data}  = await res.json()
        
    //     const gifs = data.map( img => {
    //         return ({
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url,
    //         })
    //     })

    //     setImages(
    //         gifs
    //     )
        
    // }
    
    //usamos custom hooks
    const {loading, data:images} = useFetchGifs(category)

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown animate__duration-500ms">{category}</h3>
            { loading && <p className="animate__animated animate__flash animate__infinite">Loading...</p>}
            <div className="card-grid">
                {images.map( image => {
                    return <GridGifItem key={image.id} {... image}></GridGifItem>    
                    })
                }
            </div>
        </>
    )
}