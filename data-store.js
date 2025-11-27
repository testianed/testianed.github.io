const DataStore = {
  events: new Map(),           // 全イベント
  profiles: new Map(),         // 全プロフィール
  myPosts: new Set(),          // 自分の投稿ID
  receivedLikes: new Set(),    // 受け取ったlike ID
  following: new Set(),        // フォロー中pubkey
  
  getEventsByTab(tab) {
    switch(tab) {
      case 'myposts':
        return Array.from(this.myPosts)
          .map(id => this.events.get(id))
          .filter(Boolean);
      // ...
    }
  }
};
