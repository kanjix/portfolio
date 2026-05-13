# Инструкция: Миграция на новый репозиторий "portfolio"

## Шаг 1: Создай новый репозиторий на GitHub

1. Перейди на [github.com](https://github.com)
2. Нажми на иконку **+** в верхнем правом углу
3. Выбери **New repository**
4. Заполни форму:
   - **Repository name**: `portfolio` (только это имя!)
   - **Description**: `Architecture portfolio website for Dilnaz Esengildina`
   - **Public** или **Private** (выбери по предпочтению)
   - **Initialize**: НЕ выбирай ничего (у нас уже есть код)
5. Нажми **Create repository**

## Шаг 2: Обнови remote URL локально

После создания репозитория на GitHub выполни команды:

```bash
cd /Users/kanji/Documents/proging/portfolio-kisa

# Убери старый remote
git remote remove origin

# Добавь новый remote (замени USERNAME на твой GitHub username)
git remote add origin https://github.com/USERNAME/portfolio.git

# Переименуй ветку на main (если нужно)
git branch -M main

# Отправь весь код в новый репозиторий
git push -u origin main
```

## Шаг 3: Переименуй локальную папку (опционально)

```bash
cd /Users/kanji/Documents/proging
mv portfolio-kisa portfolio
```

## Шаг 4: Готово! 🎉

Твой репозиторий "portfolio" готов к развертыванию на Vercel!

### Скопируй точный URL для git remote:

Когда создашь репозиторий на GitHub, копируй URL из зелёной кнопки **"Code"**:
- Должно быть что-то вроде: `https://github.com/kanjix/portfolio.git`

---

**Важно**: 
- Убедись, что используешь **свой GitHub username** в URL
- Все конфигурационные файлы уже обновлены для имени "portfolio"
