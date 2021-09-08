import React from 'react';
import { useParams } from 'react-router';
import { getPenById } from '../../../selectors/getPenById';

export const PenHeader = () => {

    const { penId } = useParams();
    const pen = getPenById(penId);

    const { name } = pen;

    return (
        <header className="pen-main-header">
            <div className="header-wrap">
                <h1 className="logo">
                    <a href="/">
                        (Añadir Logo)
                    </a>
                </h1>
                <div className="pen-title-wrapper">
                    <div className="pen-title-text">
                        <h1 className="pen-title">
                            <a href="/cristianortega/pen/1" className="pen-title-link" title={`${name}`}>{name}</a>
                        </h1>
                        <div className="pen-title-owner">
                            <a className="pen-title-owner-link" href="/cristianortega">Cristian Ortega</a>
                        </div>
                    </div>
                </div>
                <div className="navigation-wrap editor-actions-menu">
                    <div className="editor-actions">
                        <span className="viewSwitcher">
                            <button title="Change View" className="view-switcher-button">
                                <svg viewBox="0 0 20 20" className="EditorHeaderViewSwitcher_iconPen-1Mc1B"><path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 016 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 010 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0113 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 017 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0120 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0114 5.997V1.003z"></path></svg>
                            </button>
                            <div className="dropdownContentWrapper">
                                <div className="dropdownContent">
                                    <h3>Change View</h3>
                                    <div className="view-switcher-layout">
                                        <button id="left-layout" data-layout-type="left" className="layout-change-icon">
                                            <span className="screen-reader-text">Use Left Layout</span>
                                            <svg viewBox="0 0 20 20" className="editor-left rotate-cc90" width="20" height="20"><path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 016 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 010 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0113 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 017 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0120 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0114 5.997V1.003z"></path></svg>
                                        </button>
                                        <button id="top-layout" data-layout-type="top" className="layout-change-icon">
                                            <span className="screen-reader-text">Use Top Layout</span>
                                            <svg viewBox="0 0 20 20" className="new-pen" width="20" height="20"><path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 016 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 010 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0113 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 017 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0120 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0114 5.997V1.003z"></path></svg>
                                        </button>
                                        <button id="right-layout" data-layout-type="right" className="layout-change-icon">
                                            <span className="screen-reader-text">Use Right Layout</span>
                                            <svg viewBox="0 0 20 20" className="editor-right rotate-c90" width="20" height="20"><path d="M0 9.002C0 8.45.455 8 .992 8h18.016c.548 0 .992.456.992 1.002v9.996c0 .553-.455 1.002-.992 1.002H.992C.444 20 0 19.544 0 18.998V9.002zm0-8C0 .45.451 0 .99 0h4.02A.99.99 0 016 1.003v4.994C6 6.551 5.549 7 5.01 7H.99A.99.99 0 010 5.997V1.003zm7 0C7 .45 7.451 0 7.99 0h4.02A.99.99 0 0113 1.003v4.994C13 6.551 12.549 7 12.01 7H7.99A.99.99 0 017 5.997V1.003zm7 0C14 .45 14.451 0 14.99 0h4.02A.99.99 0 0120 1.003v4.994C20 6.551 19.549 7 19.01 7h-4.02A.99.99 0 0114 5.997V1.003z"></path></svg>
                                        </button>
                                    </div>
                                    <div className="EditorHeaderViewSwitcher_switch-1nHOd">
                                        <nav className="EditorHeaderViewSwitcherLinks_linkList-2LwWe">
                                            <a className="EditorHeaderViewSwitcherLink_link-1WfWP editor-link pen-link active" href="/noahraskin/pen/xxdWqRp" id="pen-link">
                                                Editor View
                                                <span className="EditorHeaderViewSwitcherLink_linkMeta-63jt2">
                                                    /pen/
                                                    <span data-href="https://blog.codepen.io/documentation/views/editor-view/" className="EditorHeaderViewSwitcherLink_learnMore-38FPT">
                                                        <svg viewBox="0 0 100 100" width="13" height="13"><path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699v12.525zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 01-4.101 3.751 91.479 91.479 0 00-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 00-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 019.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path></svg>
                                                    </span>
                                                </span>
                                            </a>
                                            <a className="EditorHeaderViewSwitcherLink_link-1WfWP editor-link details-link" href="/noahraskin/details/xxdWqRp" id="details-link">
                                                Details View
                                                <span className="EditorHeaderViewSwitcherLink_linkMeta-63jt2">
                                                    /details/
                                                    <span data-href="https://blog.codepen.io/documentation/views/details-view/" className="EditorHeaderViewSwitcherLink_learnMore-38FPT">
                                                        <svg viewBox="0 0 100 100" width="13" height="13"><path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699v12.525zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 01-4.101 3.751 91.479 91.479 0 00-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 00-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 019.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path></svg>
                                                    </span>
                                                </span>
                                            </a>
                                            <a className="EditorHeaderViewSwitcherLink_link-1WfWP editor-link full-link" href="/noahraskin/full/xxdWqRp" id="full-link">
                                                Full Page View
                                                <span className="EditorHeaderViewSwitcherLink_linkMeta-63jt2">
                                                    /full/
                                                    <span data-href="https://blog.codepen.io/documentation/views/full-page-view/" className="EditorHeaderViewSwitcherLink_learnMore-38FPT">
                                                        <svg viewBox="0 0 100 100" width="13" height="13"><path d="M75 0H25C11.19 0 0 11.193 0 25v50c0 13.802 11.19 25 25 25h50c13.811 0 25-11.198 25-25V25c0-13.807-11.189-25-25-25zM57.203 85.067H41.504V72.542h15.699v12.525zm16.154-43.026c-.84 2.066-1.873 3.834-3.102 5.298a20.59 20.59 0 01-4.101 3.751 91.479 91.479 0 00-4.249 3.101c-1.333 1.034-1.553 2.214-2.596 3.547-1.025 1.335-.977 3.004-.977 5.006v3.924H41.668v-4.623c0-2.864 1.366-5.265 2.27-7.202.896-1.935 2.255-3.581 3.459-4.947 1.196-1.367 2.62-2.556 3.955-3.557 1.327-.993 2.637-1.993 3.776-2.995 1.123-1.001 2.083-2.1 2.783-3.304.7-1.197 1.043-2.694.977-4.5 0-3.06-.74-5.33-2.245-6.795-1.498-1.465-3.582-2.206-6.25-2.206-1.8 0-3.337.351-4.639 1.05a9.172 9.172 0 00-3.199 2.808c-.837 1.163-1.448 3.593-1.847 5.156-.407 1.57-.602 6.115-.602 6.115H25.399c.073-8.333.684-7.963 1.855-10.965 1.164-2.995 2.8-6.132 4.899-8.33 2.099-2.197 4.63-4.179 7.601-5.417a25.782 25.782 0 019.945-1.977c4.736 0 8.683.581 11.856 1.876 3.167 1.302 5.713 2.889 7.65 4.817 1.929 1.937 3.312 4.004 4.149 6.234.831 2.237 1.245 4.313 1.245 6.242.002 3.206-.412 5.827-1.242 7.893z"></path></svg>
                                                    </span>
                                                </span>
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}
