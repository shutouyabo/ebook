const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch('H1EBJMID5J', 'd04f287a15c4a57da182b74ff62ecc3e');

const search = instantsearch({
  indexName: 'ebook_zhihu_blog_h1ebjmid5j_pages',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
  
});


search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
<article>
  <img src=${ hit.image } alt=${ hit.title } />
  <div>
    <h1>${components.Highlight({hit, attribute: "title"})}</h1>
    <p>${components.Highlight({hit, attribute: "description"})}</p>
    <p>${components.Highlight({hit, attribute: "keywords"})}</p>
  </div>
</article>
`,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();

