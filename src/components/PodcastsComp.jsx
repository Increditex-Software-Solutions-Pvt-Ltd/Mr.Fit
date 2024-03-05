import React from "react";
import "../css/ComponentsCSS/PodcastsComp.css";

function PodcastsComp() {
  const podcasts = [
    {
      img: "https://cdn.theathletic.com/cdn-cgi/image/width=300,height=300,fit=cover/app/uploads/2023/09/30105100/TA_FullTime-Europe_Cover-scaled.jpg",
      title: "Full Time Europe: A show about women's football",
    },
    {
      img: "https://cdn.theathletic.com/cdn-cgi/image/width=300,height=300,fit=cover/app/uploads/2023/04/12052923/TheAthleticFootballTacticsPodcast_CoverArtwork-scaled.jpg",
      title: "Dummy Title 2",
    },
    {
      img: "https://cdn.theathletic.com/cdn-cgi/image/width=300,height=300,fit=cover/app/uploads/2024/02/01074555/TFS_Podcast-Artword-Aug-23-scaled.jpg",
      title: "Dummy Title 3",
    },
    {
      img: "https://cdn.theathletic.com/cdn-cgi/image/width=300,height=300,fit=cover/app/uploads/2023/04/12052910/TheAthleticFootballPodcast_CoverArtwork-scaled.jpg",
      title: "Dummy Title 4",
    },
    {
      img: "https://cdn.theathletic.com/cdn-cgi/image/width=300,height=300,fit=cover/app/uploads/2024/02/02065924/DFBartworknormal.png",
      title: "Dummy Title 5",
    },
    {
      img: "https://cdn.theathletic.com/cdn-cgi/image/width=300,height=300,fit=cover/app/uploads/2023/12/08144519/Totally_Football_European-Edition_Podcast-scaled.jpg",
      title: "Dummy Title 6",
    },
    {
      img: "https://cdn.theathletic.com/cdn-cgi/image/width=300,height=300,fit=cover/app/uploads/2023/01/03115107/Tifo_New_Podcast_Monogram_3000px_2022-1.png",
      title: "Dummy Title 7",
    },
    {
      img: "https://cdn.theathletic.com/cdn-cgi/image/width=300,height=300,fit=cover/app/uploads/2020/01/10192649/TSSlogo.png",
      title: "Dummy Title 8",
    },
    {
      img: "https://cdn.theathletic.com/cdn-cgi/image/width=300,height=300,fit=cover/app/uploads/2023/07/21064814/TheAthleticTheMakingOfMessiPodcast_Cover-scaled.jpg",
      title: "Dummy Title 9",
    },
    {
      img: "https://cdn.theathletic.com/cdn-cgi/image/width=300,height=300,fit=cover/app/uploads/2022/10/26062607/AwayFromHome_Cover_Option4-scaled.jpg",
      title: "Dummy Title 10",
    },
  ];
  return (
    <div className="podcasts-container">
      {podcasts.map((podcast, i) => {
        return (
          <div
            className="card background-dark"
            style={{ width: "18rem" }}
            key={i}
          >
            <img
              src={podcast.img}
              className="card-img-top"
              alt={podcast.title}
            />
            <div className="card-body">
              <h5 className="card-title text-center">{podcast.title}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PodcastsComp;
