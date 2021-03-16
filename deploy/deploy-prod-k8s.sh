TARGET=chengduywzc-pdt/scloud-m-ui-dist:/usr/local/nginx/html/dist/activity
mv dist lottery
kubectl11 cp lottery $TARGET
rm -rf lottery
echo "upload dist to k8s pod done "
