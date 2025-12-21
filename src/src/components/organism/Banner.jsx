import frasco from "../../assets/frasco.png";
import '../css/Banner.css'

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="texto">
                <h1>
                    Discover the Benefits of Natural Supplements
                </h1>

                <p>
                    Find a variety of natural supplements to support your health and wellness
                </p>
            </div>

            <div className="div-imagem">
                <img src={frasco} alt="imagem" />
            </div>
        </div>
    );
}

export default Banner;