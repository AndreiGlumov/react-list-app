import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import {usePosts} from './components/hooks/usePosts';
import PostService from './components/API/PostService';
import Loader from './components/UI/Loader/Loader';
import {useFetching} from './components/hooks/useFetching';

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    if (newPost.title !== '' && newPost.body !== '') {
      setPosts([...posts, newPost])
      setModal(false)
    }
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      {/*<button className="btn btn-danger mt-4 mx-2" onClick={fetchPosts}>GET POSTS</button>*/}
      <button className="btn btn-primary mt-4" onClick={() => setModal(true)}>Создать пост</button>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr className="my-3" />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h3>Произошла ошибка ${postError}</h3>}
      {
        isPostsLoading
          ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
          : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов JavaScript" />
      }

    </div>
  );
}

export default App;
