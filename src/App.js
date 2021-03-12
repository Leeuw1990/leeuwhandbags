import React from 'react';
import './App.css';
import ButtonRest from "./assets/Button";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import BagsPictures from "./assets/PicturesBag";
import Tile from "./assets/FooterSections";
import brandPic from './assets/brand.png';
import storyPic from './assets/our_story.png';



function App() {
  return (
      <>
          <nav>
              <ButtonRest type="button"
                          log="To the collection"
                          buttonText="To the collection"
                          disabled={false}
              />
              <ButtonRest type="button"
                          log="Shop all bags"
                          buttonText="Shop all bags"
                          disabled={false}
              />
              <ButtonRest type="button"
                          log="Pre-orders"
                          buttonText="Pre-orders"
                          disabled={true}
              />
        </nav>
          <main>
              <BagsPictures
                  label="Best seller"
                  image={bag1}
                  imageName='bagOne'
                  bagName="The handy Bag"
                  price="€400"
              />
              <BagsPictures
                  label="Best seller"
                  image={bag2}
                  imageName='bagTwo'
                  bagName="The stylish bag"
                  price="€250"
              />
              <BagsPictures
                  label="New collection"
                  image={bag3}
                  imageName='bagThree'
                  bagName="The simple bag"
                  price="€300"
              />
              <BagsPictures
              label="New collection"
              image={bag4}
              imageName='bagFour'
              bagName="The handy Bag"
              price="€150"
              />
          </main>
          <footer>
          <Tile
          head="The brand">
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores dignissimos eius officia omnis,</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Atque beatae tenetur vero voluptatibus?</p>
          </Tile>
          <Tile
          image={brandPic}
          description="Super mooi merk foto van ons!"
          />
          <Tile
          head="Our story">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio incidunt perferendis veritatis. Adipisci alias consectetur culpa, dolor eligendi nesciunt numquam officiis repellendus repudiandae, suscipit veritatis vero vitae voluptatem. Molestias, quaerat.</p>
          </Tile>
          <Tile
              image={storyPic}
              description="Geweldige foto over ons verhaal"
          />
          </footer>
        </>
  );
}

export default App;



