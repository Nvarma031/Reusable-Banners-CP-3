// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="bannerheading">{headerText}</h1>
        <p className="bannerdescription">{description}</p>
        <button className="show-more" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
