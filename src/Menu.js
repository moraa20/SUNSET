import React from 'react';
import '../src/menu.css';
import spaghetti from '../src/assets/drinkone.jpg';
import caesar from '../src/assets/drinkthree.jpg';
import salmon from '../src/assets/drinktwo.jpg';
import water from '../src/assets/foodfive.jpg';
import rice from '../src/assets/foodfour.jpg';
import chipo from '../src/assets/foodone.jpg';
import chapati from '../src/assets/foodthree.jpg';
import pilau from '../src/assets/foodtwo.jpg';

function Menu() {
    const menuItems = [
        { name: 'Gourmet Spaghetti', description: 'Deliciously saucy Italian pasta', price: '$14', imageUrl: spaghetti },
        { name: 'Royal Caesar Salad', description: 'Fresh romaine with a tangy Caesar dressing', price: '$10', imageUrl: caesar },
        { name: 'Premium Grilled Salmon', description: 'Exquisitely grilled fresh salmon', price: '$20', imageUrl: salmon },
        { name: 'Crystal Clear Water', description: 'Pure and refreshing', price: '$2', imageUrl: water },
        { name: 'Steamed Jasmine Rice', description: 'Fragrant steamed rice', price: '$6', imageUrl: rice },
        { name: 'Golden Crispy Fries', description: 'Perfectly fried to a golden crisp', price: '$5', imageUrl: chipo },
        { name: 'Handmade Chapati', description: 'Soft and flaky flatbread', price: '$3', imageUrl: chapati },
        { name: 'Spiced Pilaf', description: 'Aromatic rice with spices', price: '$9', imageUrl: pilau },
    ];

    return (
        <section className='menu-section' id='menu'>
            <h2 className='heading'>Menu</h2>
            <div className="menu-container">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <div className="food-image">
                            <img src={item.imageUrl} alt={item.name} />
                        </div>
                        <div className="food-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Menu;
