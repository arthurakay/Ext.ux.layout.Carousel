# touch-ux-layout - Read Me

## Architecture

The `touch-ux-layout` package is a Sencha Cmd package, and abides by all of the normal architectural paradigms - but it
incorporates a slight twist in order to be consumed by multiple frameworks (i.e. both Touch and Ext JS).

In `./.sencha/package/sencha.cfg` you'll find that I've changed several default settings:

    package.classpath=${package.dir}/src-${framework.name}

    package.sass.srcpath=${package.dir}/sass-${framework.name}/src
    package.sass.varpath=${package.dir}/sass-${framework.name}/var
    package.sass.etcpath=${package.dir}/sass-${framework.name}/etc/all.scss

So if you're looking carefully, what you see is that I've added `-${framework.name}` to these filepaths. This allows
Sencha Cmd to inject `ext` or `touch` as appropriate when building the client applications (as `framework.name` is defined
by the client application).

Therefore the framework-specific JavaScript lives under `./src-touch/` and `./src-ext/`, which the framework-specific
SASS lives under `./sass-touch/` and `./sass-ext/`.

## Approach

As noted in my Sencha blog post, the approach to building both Touch and Ext JS layouts is _essentially the same_.
The only reason to have `touch` and `ext` specific code is the minor API and DOM differences - and had I been so
motivated I could have further extracted the common Math bits into a different shared utility... but I'm lazy.

As noted in the repo's README: this is simply a tech demo, and should never be considered production-ready code.