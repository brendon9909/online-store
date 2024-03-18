import Products from "./AllProducts";
import { Row, Container } from "react-bootstrap";

export default function AllProducts() {
  const products = [
    //array for each product object
    {
      title: "Playstation 5",
      body: "The PlayStation 5: Unleash Next-Gen Gaming. Experience lightning-fast load times, breathtaking visuals, and immersive gameplay with the cutting-edge PS5 console",
      price: 13700,
      image: "https://m.media-amazon.com/images/I/51QKZfyi-dL.jpg",
      class: "psConsole",
      change: "Color",
      item1: "Blue",
      item2: "Red",
      item3: "Green",
    },
    {
      title: "Xbox Series X",
      body: "Xbox Series X: Unleash 4K Gaming. Experience speed, power, and immersive play with the next-gen Xbox",
      price: 15200,
      image:
        "https://media.takealot.com/covers_images/5eb2cd2d4c7a4e5b949e391e6726ed3d/s-pdpxl.file",
      class: "xbConsole",
      change: "Color",
      item1: "Blue",
      item2: "Red",
      item3: "Green",
    },
    {
      title: "Nintendo Switch",
      body: "Nintendo Switch: Versatile gaming, handheld or TV mode. Explore Nintendo's iconic games anytime, anywhere, on this innovative console",
      price: 9500,
      image:
        "https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/1/0/10002207_2_ecommerce_6c4a.png",
      change: "Color",
      item1: "Purple",
      item2: "Pink",
      item3: "Gold",
    },
    {
      title: "Playstation Controller",
      body: "PlayStation 5 Controller: DualSense innovation brings immersive gaming with adaptive triggers, haptic feedback, and precise control for next-gen experiences",
      price: 1100,
      image:
        "https://koodoo.co.za/cdn/shop/products/01_r_1080x.jpg?v=1613678437",
      change: "Color",
      item1: "Blue",
      item2: "Red",
      item3: "Green",
    },
    {
      title: "Xbox Series X Controller",
      body: "Xbox Controller: Ergonomic design, responsive buttons, and precise thumbsticks for immersive gaming on Xbox consoles and Windows PCs. #XboxController",
      price: 950,
      image:
        "https://www.incredible.co.za/media/catalog/product/cache/7ce9addd40d23ee411c2cc726ad5e7ed/x/b/xbox2020_cntlr_blck_frnt_v2_rgb_e_commerce_a1d9.jpg",
      change: "Color",
      item1: "Blue",
      item2: "Red",
      item3: "Green",
    },
    {
      title: "Oculus Rift",
      body: "Oculus Rift: Dive into VR worlds. High-res display, precise tracking, and immersive experience for gaming, exploration, and creativity. #OculusRift",
      price: 10500,
      image:
        "https://m.media-amazon.com/images/I/61ueGFutGgL._AC_UF1000,1000_QL80_.jpg",
      class: "rift",
      change: "Color",
      item1: "Blue",
      item2: "Red",
      item3: "Green",
    },
    {
      title: "Razer Headphones",
      body: "Razer Headphones: Precision audio, comfort-driven design, and immersive sound for gaming, music, and content creation. Elevate your audio experience",
      price: 1000,
      image:
        "https://www.evetech.co.za/repository/ProductImages/razer-kraken-ultimate-wired-gaming-headset-1000px-v1-0003.jpg",
      change: "Color",
      item1: "Blue",
      item2: "Red",
      item3: "Green",
    },
    {
      title: "Ryzen 5",
      body: "Ryzen 5: AMD's high-performance CPUs. Multi-core power for gaming, content creation, and multitasking. Elevate your computing experience. #Ryzen 5",
      price: 22500,
      image:
        "https://media.takealot.com/covers_images/91949e96ade6409a8484a1bcc38fe1d1/s-pdpxl.file",
      change: "Color",
      item1: "Blue",
      item2: "Red",
      item3: "Green",
    },
    {
      title: "Seagate Hard drive",
      body: "Seagate Hard Drive: Reliable storage solutions for data security, speed, and capacity. Enhance your storage needs with Seagate's dependable drives",
      price: 1700,
      image:
        "https://www.tradeinn.com/f/13775/137758760/seagate-basic-usb-3.0-1tb-external-hdd-hard-drive.jpg",
      change: "Color",
      item1: "Blue",
      item2: "Red",
      item3: "Green",
    },
    {
      title: "Gift Cards",
      body: "R100 Gift Cards: Unlock gaming content on PlayStation Store, Xbox, and more. Access games, DLCs, and entertainment with this versatile gift card",
      price: 100,
      image:
        "https://www.gamespot.com/a/uploads/original/1595/15950357/3614076-gift-cards.jpg",
      change: "Card",
      item1: "Playstation",
      item2: "Xbox",
      item3: "Steam",
    },
  ];

  return (
    <div>
      <br />
      <Container>
        <Row>
          {products.map((product) => {
            //map all products
            return (
              <Products
                image={product.image}
                title={product.title}
                body={product.body}
                price={product.price}
                class={product.class}
                change={product.change}
                item1={product.item1}
                item2={product.item2}
                item3={product.item3}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
