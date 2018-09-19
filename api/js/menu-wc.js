'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">@fly/v8env documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="changelog.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CHANGELOG
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Blob.html" data-type="entity-link">Blob</a>
                    </li>
                    <li class="link">
                        <a href="classes/BodyMixin.html" data-type="entity-link">BodyMixin</a>
                    </li>
                    <li class="link">
                        <a href="classes/Collection.html" data-type="entity-link">Collection</a>
                    </li>
                    <li class="link">
                        <a href="classes/CookieJar.html" data-type="entity-link">CookieJar</a>
                    </li>
                    <li class="link">
                        <a href="classes/Document.html" data-type="entity-link">Document</a>
                    </li>
                    <li class="link">
                        <a href="classes/DocumentParser.html" data-type="entity-link">DocumentParser</a>
                    </li>
                    <li class="link">
                        <a href="classes/Element.html" data-type="entity-link">Element</a>
                    </li>
                    <li class="link">
                        <a href="classes/FetchEvent.html" data-type="entity-link">FetchEvent</a>
                    </li>
                    <li class="link">
                        <a href="classes/FormData.html" data-type="entity-link">FormData</a>
                    </li>
                    <li class="link">
                        <a href="classes/Image.html" data-type="entity-link">Image</a>
                    </li>
                    <li class="link">
                        <a href="classes/Middleware.html" data-type="entity-link">Middleware</a>
                    </li>
                    <li class="link">
                        <a href="classes/MiddlewareChain.html" data-type="entity-link">MiddlewareChain</a>
                    </li>
                    <li class="link">
                        <a href="classes/MiddlewareSettings.html" data-type="entity-link">MiddlewareSettings</a>
                    </li>
                    <li class="link">
                        <a href="classes/Node.html" data-type="entity-link">Node</a>
                    </li>
                    <li class="link">
                        <a href="classes/Request.html" data-type="entity-link">Request</a>
                    </li>
                    <li class="link">
                        <a href="classes/Response.html" data-type="entity-link">Response</a>
                    </li>
                    <li class="link">
                        <a href="classes/TextDecoder.html" data-type="entity-link">TextDecoder</a>
                    </li>
                    <li class="link">
                        <a href="classes/TextEncoder.html" data-type="entity-link">TextEncoder</a>
                    </li>
                    <li class="link">
                        <a href="classes/TimeoutError.html" data-type="entity-link">TimeoutError</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/BridgeTransferOptions.html" data-type="entity-link">BridgeTransferOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/CacheSetOptions.html" data-type="entity-link">CacheSetOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Color.html" data-type="entity-link">Color</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/CreateOptions.html" data-type="entity-link">CreateOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ExtendOptions.html" data-type="entity-link">ExtendOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FlyRequest.html" data-type="entity-link">FlyRequest</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/FlyRequestInit.html" data-type="entity-link">FlyRequestInit</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/JpegOptions.html" data-type="entity-link">JpegOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Metadata.html" data-type="entity-link">Metadata</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Metadata-1.html" data-type="entity-link">Metadata</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MountInfo.html" data-type="entity-link">MountInfo</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/OperationResult.html" data-type="entity-link">OperationResult</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/OverlayOptions.html" data-type="entity-link">OverlayOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PngOptions.html" data-type="entity-link">PngOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ProxyOptions.html" data-type="entity-link">ProxyOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ReadableStreamController.html" data-type="entity-link">ReadableStreamController</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ResizeOptions.html" data-type="entity-link">ResizeOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ResponseCacheSetOptions.html" data-type="entity-link">ResponseCacheSetOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ScaleOptions.html" data-type="entity-link">ScaleOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/StaticServerOptions.html" data-type="entity-link">StaticServerOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/WebpOptions.html" data-type="entity-link">WebpOptions</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
