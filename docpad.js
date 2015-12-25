// DocPad Configuration File
// http://docpad.org/docs/config

// Define the DocPad Configuration
docpadConfig = {
	documentPaths: ['render'],
  templateData: {
    site: {
      url: "http://cth-documentation.com",
      title: "CTH-docs",
      description: "The documentation site for CTH"
    },
    getPreparedTitle: function(){
      if(this.document.title){
        return this.document.title +  " | " + this.site.title;
      } else {
        return this.site.title;
      }
    }
  },
  collections: {
    posts: function(){
      var documents = this.getCollection("documents");
      var sortByDescendingDate = [{data: -1 }];
      var typeEqualsPost = { type: {$eq: "post"}};

      var postList = documents.findAllLive(typeEqualsPost, sortByDescendingDate);

      postList.on("add", function(model){
        model.setMetaDefaults({ layout: "post"});
      })

      return postList;
    }
  }
}

// Export the DocPad Configuration
module.exports = docpadConfig;