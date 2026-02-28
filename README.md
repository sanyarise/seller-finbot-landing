# seller-finbot Landing Page

Лендинг для Telegram-бота [seller-finbot](https://t.me/SellerFinBot) — финансовая аналитика для селлеров WB и Ozon.

**Сайт:** https://seller-finbot.ru

## Стек

- Чистый HTML + [Tailwind CSS](https://tailwindcss.com/) (CDN)
- Vanilla JS (FAQ аккордеон, smooth scroll)
- Nginx на VPS (85.208.87.101)
- SSL: Let's Encrypt (автообновление)

## Структура лендинга

| # | Секция | Цель |
|---|--------|------|
| 1 | Hero | Главный заголовок + мокап Telegram-уведомления |
| 2 | Факты | 4 цифры — масштаб проблемы с комиссиями |
| 3 | Боли | 4 карточки — узнаёшь себя? |
| 4 | Решение | Боль → Решение × 4 |
| 5 | Фичи | Топ-5 функций + бонусные |
| 6 | Как работает | 3 шага подключения |
| 7 | Сравнение | Таблица vs конкуренты (MPStats, MarketGuru) |
| 8 | Тарифы | Basic / Pro + 14-дневный триал |
| 9 | FAQ | 7 вопросов-ответов |
| 10 | Финальный CTA | Призыв + кнопка |

## Деплой

CI/CD через GitHub Actions (`.github/workflows/deploy.yml`):
- Триггер: push в `master`
- rsync → `/var/www/seller-finbot-landing` на сервере

### Secrets (GitHub → Settings → Secrets)

| Secret | Значение |
|--------|----------|
| `DEPLOY_KEY` | Приватный SSH-ключ deploy пользователя |
| `DEPLOY_HOST` | `85.208.87.101` |
| `DEPLOY_USER` | `san_rise` |
| `DEPLOY_PATH` | `/var/www/seller-finbot-landing` |

### Nginx конфиг

`/etc/nginx/sites-enabled/seller-finbot.ru` — статика + gzip + 30d кеш для ассетов.

## Локальная разработка

```bash
# Просто открыть в браузере
open index.html

# Или через python
python3 -m http.server 8080
```

## Тарифы (актуальные)

| | Basic | Pro |
|---|---|---|
| Цена | 990 ₽/мес | 1 990 ₽/мес |
| Триал | 14 дней бесплатно | 14 дней бесплатно |
| SKU | до 10 | неограниченно |
| Юнит-экономика | ✅ | ✅ |
| ABC-анализ | ❌ | ✅ |
| Excel-экспорт | ❌ | ✅ |
| Диагностика убытков | ❌ | ✅ |

## Связанные репозитории

- [seller-finbot](https://github.com/sanyarise/seller-finbot) — основной бот (приватный)
