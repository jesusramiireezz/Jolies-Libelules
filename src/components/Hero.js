import './Hero.css';
import heroImg from '../assets/hero-bg.jpg';

function Hero() {
    return (
        <section className="hero-split-limited">
            <div className="hero-text">
                <h1>Tu piel, tu momento.</h1>
                <p>Centro de belleza y estética avanzada.</p>
                <a
                    href="https://wa.me/34672075100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                >
                    Reserva tu cita
                </a>
            </div>
            <div className="hero-image">
                <img src={heroImg} alt="Estética facial" />
            </div>
            <div className="scroll-down">
                <a href="#servicios">
                    <svg
                        width="28"
                        height="28"
                        fill="#82b43b"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 16l-6-6h12l-6 6z" />
                    </svg>
                </a>
            </div>


        </section>

    );
}

export default Hero;