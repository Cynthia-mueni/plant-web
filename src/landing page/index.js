import "./index.css";
const LandingPage = () => {
  return (
    <>
      <div class="nav">
        <h4>Bert'ooz</h4>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">New Collection</a>
          <a href="#">DiscountCollection</a>
        </div>
      </div>

      <div>
        <div>
        <h1>Embrace Your Space<br/>with Our Home De'cor</h1>
        <p>Curate Your Dream Home:Explore Our Home Decor Collection</p>
        <button>Explore Collection</button>
        </div>
        <div>
            <img src="images/flower.jpeg"/>
        </div>
      </div>

      <div>
      <h1>Our Vision:Crafting</h1>
      </div>
    </>
  );
};
export default LandingPage;
