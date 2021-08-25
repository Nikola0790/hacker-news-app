import React from "react";

const urlId = "https://hacker-news.firebaseio.com/v0/topstories.json";
const arrayId = [];
const newsTitle = [];

export const getId = () => {
  return fetch(urlId)
    .then((response) => {
      return response.json();
    })
    .then((numId) => {
      for (let i = 0; i < 10; i++) {
        arrayId.push(numId[i]);
      }
      return arrayId;
    })
    .then((data) => {
      const url_2 = (id) => {
        return fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
        )
          .then((response) => {
            return response.json();
          })
          .then((story) => {
            newsTitle.push(story);
          });
      };
      for (let j = 0; j < data.length; j++) {
        url_2(data[j]);
      }
      return newsTitle;
    });
};
