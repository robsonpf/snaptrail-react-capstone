import reducer from './posts'
import * as actions from '../actions/posts'
import deepFreeze from 'deep-freeze'

describe("posts reducer", () => {
  it("should return the initial state", () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      isLoading: false,
      allPosts:[],
      userPosts: []
    })
  })

  it("should handle FETCH_POSTS_PENDING", () => {
    const currentState = {
      isLoading: false,
      userPosts: [],
      allPosts: []
    }
    deepFreeze(currentState)

    expect(
      reducer(currentState, {
        type: actions.FETCH_POSTS_PENDING
      })
    ).toEqual({
        isLoading: true,
        userPosts: [],
        allPosts: []
    })
  })

  it("should handle FETCH_POSTS_SUCCESS", () => {
    const currentState = {
      isLoading: false,
      userPosts: [],
      allPosts: []
    }
    deepFreeze(currentState)

    expect(
      reducer(currentState, {
        type: actions.FETCH_POSTS_SUCCESS,
        payload: [{
          id: 1,
          image_url: "http:mountain.com.jpg",
          description: "Mountain",
          location: "Berout",
          latitude: 1,
          longitude: 10,
          user: {
            id: 1,
            username: "Chico Doido",
            user_image: "Chico_Doido.jpg",
            email: "chicoDoido@fake.com"
          }
        }]
      })
    ).toEqual({
      isLoading: false,
      userPosts: [],
      allPosts: [{
        id: 1,
        image_url: "http:mountain.com.jpg",
        description: "Mountain",
        location: "Berout",
        latitude: 1,
        longitude: 10,
        user: {
          id: 1,
          username: "Chico Doido",
          user_image: "Chico_Doido.jpg",
          email: "chicoDoido@fake.com"
        }
      }]
    })
  })

  it("should handle FETCH_POSTS_FAILED", () => {
    const currentState = {
      isLoading: false,
      userPosts: [],
      allPosts: []
    }
    deepFreeze(currentState)

    expect(
      reducer(currentState, {
        type: actions.FETCH_POSTS_FAILED,
        payload: "Can't fetch posts"
      })
    ).toEqual("Can't fetch posts")
  })

  it("should handle FETCH_POSTS_BY_USER_PENDING", () => {
    const currentState = {
      isLoading: false,
      userPosts: [],
      allPosts: []
    }
    deepFreeze(currentState)

    expect(
      reducer(currentState, {
        type: actions.FETCH_POSTS_BY_USER_PENDING
      })
    ).toEqual({
        isLoading: true,
        userPosts: [],
        allPosts: []
    })
  })

  it("should handle FETCH_POSTS_BY_USER_SUCCESS", () => {
    const currentState = {
      isLoading: false,
      userPosts: [],
      allPosts: []
    }
    deepFreeze(currentState)

    expect(
      reducer(currentState, {
        type: actions.FETCH_POSTS_BY_USER_SUCCESS,
        payload: [{
          id: 1,
          image_url: "http:mountain.com.jpg",
          description: "Mountain",
          location: "Berout",
          latitude: 1,
          longitude: 10,
          user: {
            id: 1,
            username: "JSON",
            user_image: "jason.jpg",
            email: "jason@fake.com"
          }
        }]
      })
    ).toEqual({
      isLoading: false,
      userPosts: [{
        id: 1,
        image_url: "http:mountain.com.jpg",
        description: "Mountain",
        location: "Berout",
        latitude: 1,
        longitude: 10,
        user: {
          id: 1,
          username: "JSON",
          user_image: "jason.jpg",
          email: "jason@fake.com"
        }
      }],
      allPosts: []
    })
  })

  it("should handle FETCH_POSTS_BY_USER_FAILED", () => {
    const currentState = {
      isLoading: false,
      userPosts: [],
      allPosts: []
    }
    deepFreeze(currentState)

    expect(
      reducer(currentState, {
        type: actions.FETCH_POSTS_BY_USER_FAILED,
        payload: "Can't fetch posts by user"
      })
    ).toEqual("Can't fetch posts by user")
  })

  it("should handle CREATE_POST_SUCCESS")
})
