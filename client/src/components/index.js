const fs = require('fs');

const components = {
    test: 'test'
};

fs.readdir('./', result => {
    console.log(result);
});

export default components;