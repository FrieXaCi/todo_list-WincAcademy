//localhost
const url = 'http://localhost:3000/';

// get data from localhost
const getData = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
getData();

// post data on localhost
const postData = async (input) => {
  const data = {
    description: input,
    done: false,
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (error) {
    console.log('error');
  }
};

// delete data from local host
const deleteData = async (id) => {
  const response = await fetch(url + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('todo from ' + id + ' is deleted');
};

// change data at local host
const changeData = async (changeText, id) => {
  const data = {
    description: changeText,
  };

  try {
    const response = await fetch(url + id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);

    return await response.json();
  } catch (error) {
    console.log('error');
  }
};

const completeData = async (done, id) => {
  const data = {
    done: true,
  };

  try {
    const response = await fetch(url + id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(data);

    return await response.json();
  } catch (error) {
    console.log('error');
  }
};
