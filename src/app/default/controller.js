export const DefaultCtrl = [ '$scope', 'default', class DefaultCtrl {
  constructor($scope, DefaultService) {
    this.title = "Chaz Instafeed";

    // DefaultService.getFeed()
    //   .then( ({
    //     meta,
    //     data
    //   }) => {
    //     console.log(data);
    //     $scope.posts = console.log(data);
    //   })
    //   .catch( err => {
    //     console.log(err);
    //   });

    DefaultService.getFeed()
      .then( ( {
        data: {
          data
        },
        data: {
          meta: {
            code
          }
        }
      }) => {
        console.log(data);
        console.log(code);
        if ( code !== 200 ) {
          $scope.error = `Error fetching endpoing\n
          Status: ${code}`;
        }

        $scope.pictures = data;
      })
      .catch( err => {
        console.log(err);
      });
  }
}];