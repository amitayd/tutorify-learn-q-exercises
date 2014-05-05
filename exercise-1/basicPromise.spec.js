describe ('createBasicPromise()', function() {
    it('should return an object for a valid url', function(done) {
        var validUrl = 'resources/beds.json';
        createBasicPromise(validUrl)
        .then(function(result) {
            expect(typeof(result)).toEqual('object');
            done();
        });
        
    });
    
    it('should fail with Error for invalid url', function(done) {
        var invalidUrl = 'resources/chairs.json';
        createBasicPromise(invalidUrl)
        .fail(function(result) {
            expect(Error.prototype.isPrototypeOf(result)).toEqual(true);
            done();
        });       
    });
});