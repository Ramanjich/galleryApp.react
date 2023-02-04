// Write your code here.
import './index.css'

const Thumbnailitem = props => {
  const {eachlist, onchangeimage} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachlist

  const onclickthumb = () => {
    onchangeimage(id)
  }

  return (
    <li className="items">
      <button type="submit" className="button" onClick={onclickthumb}>
        <img
          src={thumbnailUrl}
          className="thumb-image"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default Thumbnailitem
