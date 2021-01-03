// Execute these lines in an LoDash environment

const getParamString = (params = {}) => 
    Object.entries( params ).reduce( ( acc, param ) =>
    `${acc}&${param[0]}=${param[1]}`, '' );

const getOpenWeatherMapUrl = 
    ( endpoint, apiKey, params, city ) =>
    `http://api.openweathermap.org/data/2.5/${endpoint}?q=${city}&appid=${apiKey}${ getParamString( params ) }`;

console.log(
    getOpenWeatherMapUrl( 'endpoint', 'KEY', {param: 'value'}, 'Mumbai' )
);

console.log(
    _.curry( getOpenWeatherMapUrl )( 'endpoint' )( 'KEY' )( {} )( 'Mumbai' ),
    _.curry( getOpenWeatherMapUrl )( 'endpoint', 'KEY' )( {} )( 'Mumbai' ),
    _.curry( getOpenWeatherMapUrl )( 'endpoint', 'KEY' )( {}, 'Mumbai' ),
    _.curryRight( getOpenWeatherMapUrl )( 'Mumbai' )( {} )( 'KEY' )( 'endpoint' )
);

const getCityWeather = _.partial( getOpenWeatherMapUrl, 'endpoint', 'KEY', {} )

console.log( getCityWeather( 'Berlin' ) );