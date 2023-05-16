


export  function addCompleted (keys, data) {
    let checkElementencoded = localStorage.getItem('completed');
    let checkElementexisting = checkElementencoded ? JSON.parse(checkElementencoded) : [];
    
    keys.forEach(element => {
        checkElementexisting.push(
            data.find(
                el => el.key == element
            )
        );
    });
    localStorage.setItem('completed', JSON.stringify(checkElementexisting)) 

    const listActive = localStorage.getItem('list')
    let listActivExisting = listActive ? JSON.parse(listActive) : [];
    let newList = []
    const result = listActivExisting.filter((item) => !keys.includes(item.key));
    localStorage.setItem('list', JSON.stringify(result));
    return result;
    
}
