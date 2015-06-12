describe('optIn', function() {
	var scope,
		element,
		compiled,
		transcludedHtml,
		html;

	beforeEach(module('myApp'));
	beforeEach(module('template.html'));
	beforeEach(inject(function($rootScope, $compile) {
		transcludedHtml = '<div class="brand-logo><p>Brand Logo</p></div>';

		html = "<opt-in>" + transcludedHtml + "</opt-in>";

		scope = $rootScope.$new();
		compiled = $compile(html);
		element = compiled(scope);
		scope.$digest();
	}));

	it('should render the element correctly', function() {
		expect(element.find('form').length).toBe(1);
		expect(element.find('input').length).toBe(4);
	});

});