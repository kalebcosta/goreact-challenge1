import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Post from './Post';
import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        avatar: 'https://api.adorable.io/avatars',
        author: 'Reginaldo da Silva',
        time: 60,
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa nesciunt minus, magnam soluta, quisquam eos natus molestiae eveniet commodi quasi cumque, quibusdam voluptatibus fuga sint voluptate? Perferendis, reiciendis consequuntur.'
      },
      {
        id: 1,
        avatar: 'https://api.adorable.io/avatars',
        author: 'Maria Chiquinha',
        time: 3,
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa nesciunt minus, magnam soluta, quisquam eos natus molestiae eveniet commodi quasi cumque, quibusdam voluptatibus fuga sint voluptate? Perferendis, reiciendis consequuntur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae culpa nesciunt minus, magnam soluta, quisquam eos natus molestiae eveniet commodi quasi cumque, quibusdam voluptatibus fuga sint voluptate? Perferendis, reiciendis consequuntur.'
      },
      {
        id: 2,
        avatar: 'https://api.adorable.io/avatars',
        author: 'Zé Ramalho',
        time: 40,
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
      },
      {
        id: 3,
        avatar: 'https://api.adorable.io/avatars',
        author: 'Bill Gates',
        time: 30,
        description: 'Azure is better than AWS!'
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        {posts.map(post => <Post data={post} key={post.id} />)}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
