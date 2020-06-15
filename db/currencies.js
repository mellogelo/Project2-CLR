const currencySeed = [
  { country: "Albania", name: "Lek", code: "ALL", symbolUnicodeHex: "4c,65,6b", isBaseCurrency: false },
  { country: "Afghanistan", name: "Afghani", code: "AFN", symbolUnicodeHex: "60b", isBaseCurrency: false },
  { country: "Argentina", name: "Peso", code: "ARS", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Aruba", name: "Guilder", code: "AWG", symbolUnicodeHex: "192", isBaseCurrency: false },
  { country: "Australia", name: "Dollar", code: "AUD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Azerbaijan", name: "Manat", code: "AZN", symbolUnicodeHex: "20bc", isBaseCurrency: false },
  { country: "Bahamas", name: "Dollar", code: "BSD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Barbados", name: "Dollar", code: "BBD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Belarus", name: "Ruble", code: "BYN", symbolUnicodeHex: "42,72", isBaseCurrency: false },
  { country: "Belize", name: "Dollar", code: "BZD", symbolUnicodeHex: "42,5a,24", isBaseCurrency: false },
  { country: "Bermuda", name: "Dollar", code: "BMD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Bolivia", name: "Bolíviano", code: "BOB", symbolUnicodeHex: "24,62", isBaseCurrency: false },
  { country: "Botswana", name: "Pula", code: "BWP", symbolUnicodeHex: "50", isBaseCurrency: false },
  { country: "Bulgaria", name: "Lev", code: "BGN", symbolUnicodeHex: "43b,432", isBaseCurrency: false },
  { country: "Brazil", name: "Real", code: "BRL", symbolUnicodeHex: "52,24", isBaseCurrency: false },
  { country: "Brunei Darussalam", name: "Dollar", code: "BND", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Cambodia", name: "Riel", code: "KHR", symbolUnicodeHex: "17db", isBaseCurrency: false },
  { country: "Canada", name: "Dollar", code: "CAD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Cayman Islands", name: "Dollar", code: "KYD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Chile", name: "Peso", code: "CLP", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "China", name: "Yuan Renminbi", code: "CNY", symbolUicodeHex: "a5", isBaseCurrency: false },
  { country: "Colombia", name: "Peso", code: "COP", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Costa Rica", name: "Colon", code: "CRC", symbolUnicodeHex: "20a1", isBaseCurrency: false },
  { country: "Croatia", name: "Kuna", code: "HRK", symbolUnicodeHex: "6b,6e", isBaseCurrency: false },
  { country: "Cuba", name: "Peso", code: "CUP", symbolUnicodeHex: "20b1", isBaseCurrency: false },
  { country: "Czech Republic", name: "Koruna", code: "CZK", symbolUnicodeHex: "4b,10d", isBaseCurrency: false },
  { country: "Denmark", name: "Krone", code: "DKK", symbolUnicodeHex: "6b,72", isBaseCurrency: false },
  { country: "Dominican Republic", name: "Peso", code: "DOP", symbolUnicodeHex: "52,44,24", isBaseCurrency: false },
  { country: "East Caribbean", name: "Dollar", code: "XCD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Egypt", name: "Pound", code: "EGP", symbolUnicodeHex: "a3", isBaseCurrency: false },
  { country: "El Salvador", name: "Colon", code: "SVC", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "European Union", name: "Euro", code: "EUR", symbolUnicodeHex: "20ac", isBaseCurrency: true },
  { country: "Falkland Islands", name: "Pound", code: "FKP", symbolUnicodeHex: "a3", isBaseCurrency: false },
  { country: "Fiji", name: "Dollar", code: "FJD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Ghana", name: "Cedi", code: "GHS", symbolUnicodeHex: "a2", isBaseCurrency: false },
  { country: "Gibraltar", name: "Pound", code: "GIP", symbolUnicodeHex: "a3", isBaseCurrency: false },
  { country: "Guatemala", name: "Quetzal", code: "GTQ", symbolUnicodeHex: "51", isBaseCurrency: false },
  { country: "Guernsey", name: "Pound", code: "GGP", symbolUnicodeHex: "a3", isBaseCurrency: false },
  { country: "Guyana", name: "Dollar", code: "GYD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Honduras", name: "Lempira", code: "HNL", symbolUnicodeHex: "4c", isBaseCurrency: false },
  { country: "Hong Kong", name: "Dollar", code: "HKD", symbolUnicodeHex: "24", isBaseCurrency: true },
  { country: "Hungary", name: "Forint", code: "HUF", symbolUnicodeHex: "46,74", isBaseCurrency: false },
  { country: "Iceland", name: "Krona", code: "ISK", symbolUnicodeHex: "6b,72", isBaseCurrency: false },
  { country: "India", name: "Rupee", code: "INR", symbolUnicodeHex: "8377", isBaseCurrency: false },
  { country: "Indonesia", name: "Rupiah", code: "IDR", symbolUnicodeHex: "52,70", isBaseCurrency: false },
  { country: "Iran", name: "Rial", code: "IRR", symbolUnicodeHex: "fdfc", isBaseCurrency: false },
  { country: "Isle of Man", name: "Pound", code: "IMP", symbolUnicodeHex: "a3", isBaseCurrency: false },
  { country: "Israel", name: "Shekel", code: "ILS", symbolUnicodeHex: "20aa", isBaseCurrency: false },
  { country: "Jamaica", name: "Dollar", code: "JMD", symbolUnicodeHex: "4a,24", isBaseCurrency: false },
  { country: "Japan", name: "Yen", code: "JPY", symbolUnicodeHex: "a5", isBaseCurrency: true },
  { country: "Jersey", name: "Pound", code: "JEP", symbolUnicodeHex: "a3", isBaseCurrency: false },
  { country: "Kazakhstan", name: "Tenge", code: "KZT", symbolUnicodeHex: "43b,432", isBaseCurrency: false },
  { country: "Korea (North)", name: "Won", code: "KPW", symbolUnicodeHex: "20a9", isBaseCurrency: false },
  { country: "Korea (South)", name: "Won", code: "KRW", symbolUnicodeHex: "20a9", isBaseCurrency: false },
  { country: "Kyrgyzstan", name: "Som", code: "KGS", symbolUnicodeHex: "43b,432", isBaseCurrency: false },
  { country: "Laos", name: "Kip", code: "LAK", symbolUnicodeHex: "20ad", isBaseCurrency: false },
  { country: "Lebanon", name: "Pound", code: "LBP", symbolUnicodeHex: "a3", isBaseCurrency: false },
  { country: "Liberia", name: "Dollar", code: "LRD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Macedonia", name: "Denar", code: "MKD", symbolUnicodeHex: "434,435,43d", isBaseCurrency: false },
  { country: "Malaysia", name: "Ringgit", code: "MYR", symbolUnicodeHex: "4d", isBaseCurrency: false },
  { country: "Mauritius", name: "Rupee", code: "MUR", symbolUnicodeHex: "20a8", isBaseCurrency: false },
  { country: "Mexico", name: "Peso", code: "MXN", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Mongolia", name: "Tughrik", code: "MNT", symbolUnicodeHex: "20ae", isBaseCurrency: false },
  { country: "Mozambique", name: "Metical", code: "MZN", symbolUnicodeHex: "4d,54", isBaseCurrency: false },
  { country: "Namibia", name: "Dollar", code: "NAD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Nepal", name: "Rupee", code: "NPR", symbolUnicodeHex: "20a8", isBaseCurrency: false },
  { country: "Netherlands Antilles", name: " Guilder", code: "ANG", symbolUnicodeHex: "192", isBaseCurrency: false },
  { country: "New Zealand", name: "Dollar", code: "NZD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Nicaragua", name: "Cordoba", code: "NIO", symbolUnicodeHex: "43,24", isBaseCurrency: false },
  { country: "Nigeria", name: "Naira", code: "NGN", symbolUnicodeHex: "20a6", isBaseCurrency: false },
  { country: "Norway", name: "Krone", code: "NOK", symbolUnicodeHex: "6b,72", isBaseCurrency: false },
  { country: "Oman", name: "Rial", code: "OMR", symbolUnicodeHex: "fdfc", isBaseCurrency: false },
  { country: "Pakistan", name: "Rupee", code: "PKR", symbolUnicodeHex: "20a8", isBaseCurrency: false },
  { country: "Panama", name: "Balboa", code: "PAB", symbolUnicodeHex: "42,2f,2e", isBaseCurrency: false },
  { country: "Paraguay", name: "Guarani", code: "PYG", symbolUnicodeHex: "47,73", isBaseCurrency: false },
  { country: "Peru", name: "Sol", code: "PEN", symbolUnicodeHex: "53,2f,2e", isBaseCurrency: false },
  { country: "Philippines", name: "Peso", code: "PHP", symbolUnicodeHex: "20b1", isBaseCurrency: false },
  { country: "Poland", name: "Zloty", code: "PLN", symbolUnicodeHex: "7a,142", isBaseCurrency: false },
  { country: "Qatar", name: "Riyal", code: "QAR", symbolUnicodeHex: "fdfc", isBaseCurrency: false },
  { country: "Romania", name: "Leu", code: "RON", symbolUnicodeHex: "6c,65,69", isBaseCurrency: false },
  { country: "Russia", name: "Ruble", code: "RUB", symbolUnicodeHex: "20bd", isBaseCurrency: false },
  { country: "Saint Helena", name: "Pound", code: "SHP", symbolUnicodeHex: "a3", isBaseCurrency: false },
  { country: "Saudi Arabia", name: "Riyal", code: "SAR", symbolUnicodeHex: "fdfc", isBaseCurrency: false },
  { country: "Serbia", name: "Dinar", code: "RSD", symbolUnicodeHex: "414,438,43d,2e", isBaseCurrency: false },
  { country: "Seychelles", name: "Rupee", code: "SCR", symbolUnicodeHex: "20a8", isBaseCurrency: false },
  { country: "Singapore", name: "Dollar", code: "SGD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Solomon Islands", name: "Dollar", code: "SBD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Somalia", name: "Shilling", code: "SOS", symbolUnicodeHex: "53", isBaseCurrency: false },
  { country: "South Africa", name: "Rand", code: "ZAR", symbolUnicodeHex: "52", isBaseCurrency: false },
  { country: "Sri Lanka", name: "Rupee", code: "LKR", symbolUnicodeHex: "20a8", isBaseCurrency: false },
  { country: "Sweden", name: "Krona", code: "SEK", symbolUnicodeHex: "6b,72", isBaseCurrency: false },
  { country: "Switzerland", name: "Franc", code: "CHF", symbolUnicodeHex: "43,48,46", isBaseCurrency: false },
  { country: "Suriname", name: "Dollar", code: "SRD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Syria", name: "Pound", code: "SYP", symbolUnicodeHex: "a3", isBaseCurrency: false },
  { country: "Taiwan", name: "New Dollar", code: "TWD", symbolUnicodeHex: "4e,54,24", isBaseCurrency: false },
  { country: "Thailand", name: "Baht", code: "THB", symbolUnicodeHex: "e3f", isBaseCurrency: false },
  { country: "Trinidad and Tobago", name: "Dollar", code: "TTD", symbolUnicodeHex: "54,54,24", isBaseCurrency: false },
  { country: "Turkey", name: "Lira", code: "TRY", symbolUnicodeHex: "8378", isBaseCurrency: false },
  { country: "Tuvalu", name: "Dollar", code: "TVD", symbolUnicodeHex: "24", isBaseCurrency: false },
  { country: "Ukraine", name: "Hryvnia", code: "UAH", symbolUnicodeHex: "20b4", isBaseCurrency: false },
  { country: "United Kingdom", name: "Pound", code: "GBP", symbolUnicodeHex: "a3", isBaseCurrency: true },
  { country: "United States", name: "Dollar", code: "USD", symbolUnicodeHex: "24", isBaseCurrency: true },
  { country: "Uruguay", name: "Peso", code: "UYU", symbolUnicodeHex: "24,55", isBaseCurrency: false },
  { country: "Uzbekistan", name: "Som", code: "UZS", symbolUnicodeHex: "43b,432", isBaseCurrency: false },
  { country: "Venezuela", name: "Bolívar", code: "VEF", symbolUnicodeHex: "42,73", isBaseCurrency: false },
  { country: "Viet Nam", name: "Dong", code: "VND", symbolUnicodeHex: "20ab", isBaseCurrency: false },
  { country: "Yemen", name: "Rial", code: "YER", symbolUnicodeHex: "fdfc", isBaseCurrency: false },
  { country: "Zimbabwe", name: "Dollar", code: "ZWD", symbolUnicodeHex: "5a,24", isBaseCurrency: false },
];
module.exports = { currencySeed };
