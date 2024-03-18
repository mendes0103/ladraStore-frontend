import React from 'react';

// No react as funções são componentes que tem que ser exportados para serem usados em outros arquivos. 
// O html e JavaScript são misturados, por isso o nome JSX (JavaScript XML). 
// Entao o que parece ser html é na verdade JSX.
function Home() {
    return (
        <div>
            <h1>Welcome to Home Page</h1>
        </div>
    );
}

export default Home;