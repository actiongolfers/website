require( 'shelljs/global' );

var proxy = 'proxy'
  , master = 'master'
  , opts = {
    cwd: '{{escapeBackslashes gruntfileDirectory}}'
  }
  ;

config.fatal = true;

exec( 'git rev-parse --abbrev-ref HEAD', opts, function( code, output ) {

  var exitCode = 0;
  output = output.replace( /\n/, '' );

  // http://stackoverflow.com/a/6376054
  console.log( 'Post commit hook - ' + output );

  if ( output.replace( /\n/, '' ) === master ) {

    console.log( 'Syncing "' + proxy + '" branch with "' + master + '":' );

    exec( 'git checkout ' + proxy + ' && git rebase ' + master );
    exec( 'git checkout ' + master );
    {{#if task}}exec( '{{escapeBackslashes task}}' );{{/if}}

    console.log( 'Successfully synced "' + proxy + '" branch with "' + master + '"!' );
    console.log( '------------------------------------------\n' );
  }
});