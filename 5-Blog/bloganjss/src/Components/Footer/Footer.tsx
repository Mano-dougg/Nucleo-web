import './footer.css'

function Footer() {
    return (
        <section className="footerblog">

            <div className='social'>
                <a href="https://www.instagram.com"><img src='/instagram.png' alt="Instagram" /></a>
                <a href="https://www.linkedin.com"><img src='/linkedin.png' alt="LinkedIn" /></a>
                <a href="https://www.pinterest.com"><img src='/pinterest-logo.png' alt="Pinterest" /></a>
                <a href="https://www.facebook.com"><img src='/facebook.png' alt="Facebook" /></a>
            </div>

            <div className='copyright'>
                <p>Copyright © 2024 | BOOKLOV </p>
            </div>

        </section>

    )
}

export default Footer