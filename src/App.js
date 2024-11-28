import React from 'react' 
function App() {
    
    const products = [
        {
          img: 'https://deadlift.com.pl/wp-content/uploads/2023/08/IMG_4498.jpg',
          id: 1,
          name: 'Koszulka treningowa',
          price: 50,
          description: 'Wygodna koszulka treningowa do ćwiczeń.',
          category: 'Odzieżka'
        },
        {
          img: 'https://www.runshop.pl/img/products/22/17/8/1.jpg',
          id: 2,
          name: 'Spodenki do biegania',
          price: 70,
          description: 'Przylepione spodenki do biegania z długą ściereczką.',
          category: 'Odzieżka'
        },
        {
            img: 'https://cdn.deporvillage.com/cdn-cgi/image/h=576,w=576,dpr=1,f=auto,q=75,fit=contain,background=white/product/ad-hr7477_001.jpg',
          id: 3,
          name: 'Strój pływacki',
          price: 100,
          description: 'Komplet strój pływacki do pływania.',
          category: 'Odzieżka'
        },
        {
            img: 'https://sklep.sfd.pl/produkt_img/Whey_Protein_i33284_d250x250.jpg',
          id: 4,
          name: 'Białko koncentratu',
          price: 80,
          description: 'Białko koncentratu do budowy mięśni.',
          category: 'Suplementy'
        },
        {
            img: 'https://organicpharma.pl/wp-content/uploads/2021/04/multiwitamina-multivitamina.png',
          id: 5,
          name: 'Multivitaminy',
          price: 60,
          description: 'Kompleks multivitamin.',
          category: 'Suplementy'
        },
        {
            img: 'https://forum-sportowe.pl/uploads/monthly_2018_12/1828272425_Sterydyanaboliczneaukadkrenia.jpg.a0f87fbdeda80df7e16413e3daf671d6.jpg',
          id: 6,
          name: 'Preparat na budowę mięśni',
          price: 90,
          description: 'Preparat do budowy mięśni z beta-alaniną.',
          category: 'Suplementy'
        }
      ];
      
      const categories = ['Odzieżka', 'Suplementy'];

      function ProductList({ products }) {
        return (
          <div>
            {products.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        );
      }
      
      function ProductItem({ product }) {
        return (
          <div className="product-item">
            <h3>{product.name}</h3>
            <img src= {product.img}/>
            <p>Price: {product.price.toFixed(2)} zł</p>
            <p>{product.description}</p>
          </div>
        );
      }
      
      function CategorySelector({ categories, selectedCategory, onSelectCategory }) {
        return (
          <select value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        );
      }
    

    const [selectedCategory, setSelectedCategory] = React.useState('');
  
    const filteredProducts = selectedCategory === '' ? products : products.filter(product => product.category === selectedCategory);
  
    return (
      <div className="app">
        <h1>Sklep z Odzieżką i Suplementami</h1>
        <CategorySelector categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <ProductList products={filteredProducts} />
      </div>
    );
  }
  
  export default App;
  