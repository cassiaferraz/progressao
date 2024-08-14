// import { createContext, useState, useEffect } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isFetching, setIsFetching] = useState(true);

//   // Função para buscar dados do usuário
//   const fetchUserData = async () => {
//     try {
//       const response = await fetch(`http://localhost:3000/getUserData`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-access-token': sessionStorage.getItem('token')
//         }
//       });
//       const data = await response.json();
//       setUser(data);
//       setIsFetching(false);
//     } catch (error) {
//       console.log('Erro ao buscar os dados do usuário:', error);
//       setIsFetching(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser, isFetching }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext;