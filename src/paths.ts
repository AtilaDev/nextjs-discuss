const paths = {
  home() {
    return '/';
  },
  topicShow(topicSglug: string) {
    return `/topics/${topicSglug}`;
  },
  postCreate(topicSglug: string) {
    return `/topics/${topicSglug}/posts/new`;
  },
  postShow(topicSglug: string, postId: string) {
    return `/topics/${topicSglug}/posts/${postId}`;
  },
};

export default paths;
