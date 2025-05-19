import header_img from './Header_image.jpg'

export default function HeaderImage() {
    return (
        <img src={header_img} alt="header image" className='p-3 flex max-w-full max-h-full' />
    )
}