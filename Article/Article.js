/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "All About Caribou",
    date: "Jan 1st, 2020",
    firstParagraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae pharetra sem. Ut condimentum arcu quis elementum consectetur. Integer imperdiet dictum libero ac aliquet. Vestibulum posuere quis quam vitae pellentesque. Praesent luctus aliquet nisl nec facilisis. Mauris id justo nec risus faucibus rhoncus eget vel lectus. Vivamus sollicitudin nunc vitae enim dignissim, in commodo nulla porttitor. Proin eu turpis convallis, vulputate ex tristique, elementum metus. Sed ipsum felis, venenatis a neque vel, efficitur scelerisque lacus. Mauris augue metus, sodales nec velit vel, mollis eleifend tellus. Sed interdum tristique placerat. Pellentesque fermentum porttitor magna eu feugiat.`,

    secondParagraph: `Sed quis tristique elit. Duis eu accumsan sem. Morbi felis diam, efficitur nec nisl quis, convallis pellentesque arcu. Donec dictum posuere dolor, maximus sodales turpis congue id. Aliquam at porta magna. Donec bibendum quis elit in feugiat. Aenean mollis auctor nunc, ut convallis lectus ullamcorper eu. Morbi venenatis, ante in congue fringilla, massa mauris lobortis orci, vitae sollicitudin lorem massa at diam. Duis sed mauris sed urna sodales scelerisque. Mauris lectus ipsum, tempor nec molestie ut, pharetra eu nulla. Cras nec felis ultrices, ultrices eros eget, ullamcorper est. Vivamus ac mi vitae erat commodo viverra. Proin porta metus ex, vel interdum tortor ullamcorper id. Vivamus molestie turpis ut felis tincidunt venenatis. Quisque ac sem et sem elementum pellentesque.`,

    thirdParagraph: `Donec sed lacinia dui. Quisque ut ultrices elit, ac egestas urna. Duis sit amet lacinia odio. Maecenas congue nulla ut elit tincidunt eleifend. In malesuada imperdiet venenatis. Pellentesque dignissim pulvinar eros, sed sodales nunc sagittis et. Vivamus posuere in nisi quis fringilla. Nullam dictum diam vitae sapien congue tempus. Pellentesque est sem, pretium eget nisi non, lacinia faucibus neque. Integer condimentum sapien ac justo volutpat mattis.`
  }
];

const articles = [
  {
    name: "Article",
    tag: "div",
    props: { className: "article" }
  },
  { name: "Title", tag: "h2" },
  {
    name: "Date",
    tag: "p",
    props: { className: "date" }
  },
  {
    name: "First Paragraph",
    tag: "p"
  },
  {
    name: "Second Paragraph",
    tag: "p"
  },
  {
    name: "Third Paragraph",
    tag: "p"
  },
  {
    name: "Button",
    tag: "span",
    props: {
      className: "expandButton"
    }
  }
];
// Create function for generating and returning HTML tag elements, returns html tag element
//takes 2 arguments a tagname and an optional object containing all key:values needed for tag's properties (ids, classes etc)
function create(tagName, props) {
  return Object.assign(document.createElement(tagName), props || {});
}

function cardCreator(obj, obj2) {
  return Object.assign(document.createElement(obj2.tagName), obj2.props || {});
}
// Stitching function appends html objects together
// takes two arguments, a parent and an optional child element, returns the parent
//could be potentially chained recurssively ex stitcher(parent,sticher(secondParen,child))
function stitcher(parent, child = null) {
  if (child) {
    parent.appendChild(child);
  }
  return parent;
}
//Contructor function for cards, takes 2 arguments, an object for text content and an object with
//  a tagName and an optional subobject of properties, returns a complete stitched together card
function looper(obj1, obj2 = [], cb) {
  const returnArray = [];
  obj1.forEach((element, index) => {
    const tempArray = [];
    obj2.forEach((element2, index2) => {
      tempArray.push(cb(obj1, obj2));
    });
    returnArray.push(tempArray);
  });
}
console.log(looper(data, articles, cardCreator));
function constructor(data, skeleton) {
  const constructArray = [];
  data.forEach(function() {
    const tempHolder = [];
    skeleton.forEach(element => {
      let component = create(element.tag, element.props);
      tempHolder.push(component);
    });
    console.log(constructArray);
    constructArray.push(tempHolder);
  });
  console.log(constructArray);
  constructArray.forEach((card, cardIndex) => {
    const keys = Object.keys(data[cardIndex]);
    tempHolder = [];
    card.forEach((element, elementIndex) => {
      if (element.tagName != "DIV") {
        if (element.tagName == "SPAN") {
          element.textContent = "click to Expand";
          $(element).click(function() {
            $(this)
              .parent()
              .toggleClass("article-open");
          });
        } else {
          element.textContent = data[cardIndex][keys[elementIndex - 1]];
        }

        if (elementIndex > 0) {
          tempHolder[cardIndex] = stitcher(
            constructArray[cardIndex][0],
            element
          );
        }
      }
    });
  });

  constructArray.forEach((finalCard, cardIndex) => {
    document.querySelector(".articles").append(finalCard[0]);
  });
}

constructor(data, articles);
/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

   
 

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
