class Github {
    constructor() {
      this.client_id = 'f7e7084706335cc8f807';
      this.client_secret = 'e1124815af4a035f132406f4b8604c972cbe3044';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
  
      return {
        profile
      }
    }
  }