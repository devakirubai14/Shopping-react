import SmartWatchImg from '../images/smartwatch.jpeg';
import AirpodesImg from '../images/airpods.webp';
import PurseImg from '../images/purse.webp';
import BagImg from '../images/handbag.webp';
import KurthiImg from '../images/kurthi.webp';
import EarringImg from '../images/earring.webp';
import ScrunchiesImg from '../images/scrunchies.webp';
import KeychainImg from '../images/keychain.webp';
import SunscreenImg from '../images/sunscreen.jpeg';
import ClawClipImg from '../images/clawclips.jpg';

const products = [
    {
        id: 'smartwatch',
        name: "Women's Smart Watch",
        price: '₹2499',
        image: SmartWatchImg,
        catchy: 'Elegance Meets Intelligence!.',
        description: "This chic women's smart watch blends fashion with function—track your health, stay connected, and turn heads with its sleek design. Perfect for the modern woman who’s always on the move and never compromises on style.",
        stock: 10

    },
    {
        id: 'airpods',
        name: 'boAt Airdopes 141 Wireless Earbuds',
        price: '₹4500',
        image: AirpodesImg,
        catchy: 'Unleash Pure Sound',
        description: "Experience wireless freedom and crystal-clear audio with sleek, compact AirPods—your perfect companion for music, calls, and style on the go",
        stock: 12

    },
    {
        id: 'purse',
        name: 'Premium Leather Clutch',
        price: '₹999',
        image: PurseImg,
        catchy: 'Elegance in Every Stitch.',
        description: "This classic leather purse blends timeless style with modern functionality—your perfect partner for every occasion.",
        stock: 8

    },
    {
        id: 'bag',
        name: 'Bristel Book Tote',
        price: '₹1000',
        image: BagImg,
        catchy: 'Grace Meets Utility',
        description: "This beautifully crafted handbag is a statement of sophistication—spacious, stylish, and perfect for every woman on the go.",
        stock: 6

    },
    {
        id: 'kurthi',
        name: 'Suvitamara Pure Cotton Kurta Set',
        price: '₹1099',
        image: KurthiImg,
        catchy: 'Stay comfy, look classy!',
        description: "This kurthi is perfect for everyday style with a touch of tradition – easy to wear, hard to ignore.",
        stock: 9

    },
    {
        id: 'earrings',
        name: 'Nipura Diana Stud Earrings',
        price: '₹399',
        image: EarringImg,
        catchy: 'Shine loud with every turn – sparkle made wearable.',
        description: "These earrings are just too cute to skip! Pop ’em on and you're good to go",
        stock: 15

    },
    {
        id: 'scrunchies',
        name: 'Scrunchies Combo Pack Of 5',
        price: '₹199',
        image: ScrunchiesImg,
        catchy: 'Colorful hair scrunchies (pack of 5)',
        description: "Messy bun? Sleek pony? These scrunchies got your back – soft, stretchy, and super cute for every hair mood!",
        stock: 20

    },
    {
        id: 'keychain',
        name: 'Glittering Heart Cute Keychains Aesthetic Bag Charms',
        price: '₹249',
        image: KeychainImg,
        catchy: 'Cute keychain for bags or keys.',
        description: "Add a pop of personality to your keys or bags – these cute little keychains are small in size but big on charm!",
        stock: 14

    },
    {
        id: 'sunscreen',
        name: 'Ultra Glow Sunscreen SPF 50+',
        price: '₹349',
        image: SunscreenImg,
        catchy: 'Glow while you go!',
        description: "Shield your skin from sunburns and tanning with this light, non-greasy sunscreen – your perfect sunny-day BFF!",
        stock: 14

    },
    {
        id: 'clawclips',
        name: 'Chic Grip Claw Clips (set of 3)',
        price: '₹199',
        image: ClawClipImg,
        catchy: 'Twist, clip, and slay!',
        description: "These trendy claw clips hold your hair with flair – perfect for messy buns or sleek looks in seconds!",
        stock: 25
    }
]
export default products;