// import React, { Component } from 'react';
// import authService from '../../services/authService';
// import { Navigate } from 'react-router-dom';

// const itemsList = [
//   { id: 1, name: 'Item 1', category: 'Category A', date: '2024-06-01' },
//   { id: 2, name: 'Item 2', category: 'Category B', date: '2024-06-02' },
//   { id: 3, name: 'Item 3', category: 'Category A', date: '2024-06-03' },
// ];
// console.log(itemsList)

// class LandingPage extends Component {
//     state = {
//       items: JSON.parse(localStorage.getItem("Items")) || [],
//       newItem: { name: '', category: '', date: '' },
//       search: '',
//       sortField: '',
//       editItem: null,
//       isLoggedOut: false,
//     };


  
//     componentDidMount() {
//       this.initializeItemsDataInLocalStorage();
//     }
  
//     initializeItemsDataInLocalStorage = () => {
//       const { items } = this.state;
//       localStorage.setItem("Items", JSON.stringify(items));
//     };
  
//     handleChange = (e) => {
//       this.setState({ [e.target.name]: e.target.value });
//     };
  
//     handleNewItemChange = (e) => {
//       this.setState({
//         newItem: {
//           ...this.state.newItem,
//           [e.target.name]: e.target.value
//         }
//       });
//     };
  
//     handleAddItem = (e) => {
//         e.preventDefault();
//         const newItem = {id: this.state.items.length + 1, ...this.state.newItem  };
//         const updatedItems = [...this.state.items, newItem];
//         this.setState({ items: updatedItems, newItem: { name: '', category: '', date: '' } }, () => {
//             localStorage.setItem("Items", JSON.stringify(updatedItems));
//         });
        
//     };


  
//   handleEditItemChange = (e) => {
//     this.setState({
//       editItem: {
//         ...this.state.editItem,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   handleEditItemSave = (e) => {
//     e.preventDefault();
//     const updatedItems = this.state.items.map(item =>
//       item.id === this.state.editItem.id ? this.state.editItem : item
//     );
//     this.setState({ items: updatedItems, editItem: null });
//   };

//   handleDeleteItem = (id) => {
//     const updatedItems = this.state.items.filter(item => item.id !== id);
//     this.setState({ items: updatedItems });
//   };

//   handleEditClick = (item) => {
//     this.setState({ editItem: item });
//   };

//   handleFilterChange = (e) => {
//     this.setState({ search: e.target.value });
//   };

//   handleSortChange = (e) => {
//     this.setState({ sortField: e.target.value });
//   };

//   getFilteredAndSortedItems = () => {
//     let items = this.state.items;
//     if (this.state.search) {
//       items = items.filter(item =>
//         item.name.toLowerCase().includes(this.state.search.toLowerCase())
//       );
//     }
//     if (this.state.sortField) {
//       items = items.sort((a, b) =>
//         a[this.state.sortField] > b[this.state.sortField] ? 1 : -1
//       );
//     }
//     return items;
//   };

//   handleLogout = () => {
//     authService.logout();
//     // this.props.history.push('/login');
//     this.setState({ isLoggedOut: true });
//   };

//   render() {
//     const initializeItemsData = this.initializeItemsDataInLocalStorage()
//     console.log(initializeItemsData)
//     const items = this.getFilteredAndSortedItems();
//     if (this.state.isLoggedOut) {
//         return <Navigate to="/login" />;
//       }

//     return (
//       <div>
//         <div className='nav'>
//             <h2>Landing Page</h2>
//             <button onClick={this.handleLogout}>Logout</button>
//         </div>
      
//         <div>
//           <h3>Add Item</h3>
//           <form onSubmit={this.handleAddItem}>
//             <input type="text" name="name" placeholder="Name" value={this.state.newItem.name} onChange={this.handleNewItemChange} required />
//             <input type="text" name="category" placeholder="Category" value={this.state.newItem.category} onChange={this.handleNewItemChange} required />
//             <input type="date" name="date" value={this.state.newItem.date} onChange={this.handleNewItemChange} required />
//             <button type="submit">Add</button>
//           </form>
//         </div>
//     {console.log("Helo")}
//         <div>
//           <h3>Filter & Sort</h3>
//           <input type="text" placeholder="Search" onChange={this.handleFilterChange} />
//           <select onChange={this.handleSortChange}>
//             <option value="">Sort By</option>
//             <option value="name">Name</option>
//             <option value="category">Category</option>
//             <option value="date">Date</option>
//           </select>
//         </div>
//         <div>
//           <h3>Items List</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map(item => (
//                 <tr key={item.id}>
//                   <td>{item.name}</td>
//                   <td>{item.category}</td>
//                   <td>{item.date}</td>
//                   <td>
//                     <button className='edit-btn' onClick={() => this.handleEditClick(item)}>Edit</button>
//                     <button className='delete-btn' onClick={() => this.handleDeleteItem(item.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {this.state.editItem && (
//           <div>
//             <h3>Edit Item</h3>
//             <form onSubmit={this.handleEditItemSave}>
//               <input type="text" name="name" value={this.state.editItem.name} onChange={this.handleEditItemChange} required />
//               <input type="text" name="category" value={this.state.editItem.category} onChange={this.handleEditItemChange} required />
//               <input type="date" name="date" value={this.state.editItem.date} onChange={this.handleEditItemChange} required />
//               <button type="submit">Save</button>
//             </form>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// export default LandingPage;
import React, { Component } from 'react';
import authService from '../../services/authService';
import { Navigate } from 'react-router-dom';

const itemsList = [
  { id: 1, name: 'Item 1', category: 'Category A', date: '2024-06-01' },
  { id: 2, name: 'Item 2', category: 'Category B', date: '2024-06-02' },
  { id: 3, name: 'Item 3', category: 'Category A', date: '2024-06-03' },
];

class LandingPage extends Component {
  state = {
    items: JSON.parse(localStorage.getItem("Items")) || itemsList,
    newItem: { name: '', category: '', date: '' },
    search: '',
    sortField: '',
    editItem: null,
    isLoggedOut: false,
    showModal: false,
  };

  componentDidMount() {
    this.initializeItemsDataInLocalStorage();
  }

  initializeItemsDataInLocalStorage = () => {
    const { items } = this.state;
    localStorage.setItem("Items", JSON.stringify(items));
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNewItemChange = (e) => {
    this.setState({
      newItem: {
        ...this.state.newItem,
        [e.target.name]: e.target.value
      }
    });
  };

  handleAddItem = (e) => {
    e.preventDefault();
    const newItem = {id: this.state.items.length + 1, ...this.state.newItem};
    const updatedItems = [...this.state.items, newItem];
    this.setState({ items: updatedItems, newItem: { name: '', category: '', date: '' } }, () => {
      localStorage.setItem("Items", JSON.stringify(updatedItems));
    });
  };

  handleEditItemChange = (e) => {
    this.setState({
      editItem: {
        ...this.state.editItem,
        [e.target.name]: e.target.value
      }
    });
  };

  handleEditItemSave = (e) => {
    e.preventDefault();
    const updatedItems = this.state.items.map(item =>
      item.id === this.state.editItem.id ? this.state.editItem : item
    );
    this.setState({ items: updatedItems, editItem: null, showModal: false }, () => {
      localStorage.setItem("Items", JSON.stringify(updatedItems));
    });
  };

  handleDeleteItem = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id);
    this.setState({ items: updatedItems }, () => {
      localStorage.setItem("Items", JSON.stringify(updatedItems));
    });
  };

  handleEditClick = (item) => {
    this.setState({ editItem: item, showModal: true });
  };

  handleFilterChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSortChange = (e) => {
    this.setState({ sortField: e.target.value });
  };

  getFilteredAndSortedItems = () => {
    let items = this.state.items;
    if (this.state.search) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
    }
    if (this.state.sortField) {
      items = items.sort((a, b) =>
        a[this.state.sortField] > b[this.state.sortField] ? 1 : -1
      );
    }
    return items;
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ isLoggedOut: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, editItem: null });
  };

  render() {
    const items = this.getFilteredAndSortedItems();
    if (this.state.isLoggedOut) {
      return <Navigate to="/login" />;
    }

    return (
      <div>
        <nav className='nav'>
          <h2>Landing Page</h2>
          <button onClick={this.handleLogout}>Logout</button>
        </nav>

        <div>
          <h3>Add Item</h3>
          <form onSubmit={this.handleAddItem}>
            <input type="text" name="name" placeholder="Name" value={this.state.newItem.name} onChange={this.handleNewItemChange} required />
            <input type="text" name="category" placeholder="Category" value={this.state.newItem.category} onChange={this.handleNewItemChange} required />
            <input type="date" name="date" value={this.state.newItem.date} onChange={this.handleNewItemChange} required />
            <button type="submit">Add</button>
          </form>
        </div>

        <div>
          <h3>Filter & Sort</h3>
          <input type="text" placeholder="Search" onChange={this.handleFilterChange} />
          <select onChange={this.handleSortChange}>
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="category">Category</option>
            <option value="date">Date</option>
          </select>
        </div>

        <div>
          <h3>Items List</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Date</th>
                <th className='action-table'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.date}</td>
                  <td className='action'>
                    <button className='edit-btn' onClick={() => this.handleEditClick(item)}>Edit</button>
                    <button className='delete-btn' onClick={() => this.handleDeleteItem(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {this.state.showModal && (
          <div className="modal-backdrop">
            <div className="modal-content">
              <h3>Edit Item</h3>
              {this.state.editItem && (
                <form onSubmit={this.handleEditItemSave} className='mode-form'>
                  <input type="text" name="name" value={this.state.editItem.name} onChange={this.handleEditItemChange} required />
                  <input type="text" name="category" value={this.state.editItem.category} onChange={this.handleEditItemChange} required />
                  <input type="date" name="date" value={this.state.editItem.date} onChange={this.handleEditItemChange} required />
                  <div className='model-btns'>
                    <button type="submit">Save</button>
                    <button className="delete-btn" onClick={this.closeModal}>Close</button>
                  </div>
                  
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LandingPage;
