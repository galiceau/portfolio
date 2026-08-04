import { locales, defaultLocale } from "@/lib/i18n/config";

export default function RootPage() {
  const localeList = JSON.stringify(locales);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var supported = ${localeList};
            var defaultLocale = "${defaultLocale}";
            var langs = navigator.languages || [navigator.language || defaultLocale];
            var match = defaultLocale;
            for (var i = 0; i < langs.length; i++) {
              var lang = langs[i].split("-")[0].toLowerCase();
              if (supported.indexOf(lang) !== -1) { match = lang; break; }
            }
            window.location.replace("/" + match + "/");
          })();
        `,
      }}
    />
  );
}
